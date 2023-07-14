using System.Linq;
namespace Umoa.Titres.Interest.Simulator.Core.Utils;

public static class DateUtil 
{
    public static double YearFraction(this DateTime startDate, DateTime endDate, int basis = 1)
    {
        int num;
        double denom;

        if (basis == 2)
        {
            num = startDate.DaysBetween(endDate);
            denom = 360;
        }
        else
        {
            num = startDate.DaysBetween(endDate);
            denom = YearFracBase(startDate, endDate, basis);
        }

        return num / denom;
    }

    private static double YearFracBase(this DateTime StartDate, DateTime EndDate, int Basis=0)
    {
        int StartDay;
        int StartMonth;
        int StartYear;
        int EndDay;
        int EndMonth;
        int EndYear;
        int iYear;

        switch (Basis)
        {
            case 0:
            case 2:
            case 4: // atpmBasis30360, atpmBasisActual360, atpmBasisE30360
                return 360;
            case 3: // atpmBasisActual365
                return 365;
            case 1: // atpmBasisActual
                StartDay = StartDate.Day;
                StartMonth = StartDate.Month;
                StartYear = StartDate.Year;
                EndDay = EndDate.Day;
                EndMonth = EndDate.Month;
                EndYear = EndDate.Year;

                if (StartYear == EndYear)
                {
                    if (DateTime.IsLeapYear(StartYear))
                    {
                        return 366;
                    }
                    else
                    {
                        return 365;
                    }
                }
                else if ((EndYear - 1) == StartYear && ((StartMonth > EndMonth) || ((StartMonth == EndMonth) && StartDay >= EndDay)))
                {
                    if (DateTime.IsLeapYear(StartYear))
                    {
                        if (StartMonth < 2 || (StartMonth == 2 && StartDay <= 29))
                        {
                            return 366;
                        }
                        else
                        {
                            return 365;
                        }
                    }
                    else if (DateTime.IsLeapYear(EndYear))
                    {
                        if (EndMonth > 2 || (EndMonth == 2 && EndDay == 29))
                        {
                            return 366;
                        }
                        else
                        {
                            return 365;
                        }
                    }
                    else
                    {
                        return 365;
                    }
                }
                else
                {
                    double tmpCalcAnnualBasis = 0;
                    for (iYear = StartYear; iYear <= EndYear; iYear++)
                    {
                        if (DateTime.IsLeapYear(iYear))
                        {
                            tmpCalcAnnualBasis += 366;
                        }
                        else
                        {
                            tmpCalcAnnualBasis += 365;
                        }
                    }
                    return tmpCalcAnnualBasis / (EndYear - StartYear + 1);
                }
        }

        return 0;
    }

    public static int DaysBetween(this DateTime startDate, DateTime endDate)
    {
        TimeSpan difference = endDate - startDate;
        return difference.Days;
    }

    public static DateTime RemoveSemesters(this DateTime date, int semesters)
    {
        return date.AddMonths(-6 * semesters);
    }

    public static DateTime RemoveTrimesters(this DateTime date, int trimesters)
    {
        return date.AddMonths(-3 * trimesters);
    }
}