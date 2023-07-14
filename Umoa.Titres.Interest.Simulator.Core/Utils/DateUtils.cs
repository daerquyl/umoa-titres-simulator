using System.Linq;
namespace Umoa.Titres.Interest.Simulator.Core.Utils;

public static class DateUtil 
{
    //public static double YearFraction(this DateTime startDate, DateTime endDate, int mode=1)
    //{
    //    TimeSpan duration;
    //    double daysInYear = 0;
    //    if (mode == 0)
    //    {
    //        daysInYear = 365;
    //    }
    //    else if(mode == 1)
    //    {
    //        var starPlusOneIsAfterEndDate = startDate.Month > endDate.Month || (startDate.Month == endDate.Month && startDate.Day > endDate.Day);
    //        if ((endDate.Year - 1 == startDate.Year) && (starPlusOneIsAfterEndDate))
    //        {
    //            var isFeburary29 = startDate.Month == 2 && startDate.Day <= 29;

    //            daysInYear = (startDate.Year == endDate.Year) switch
    //            {
    //                true when DateTime.IsLeapYear(startDate.Year) => 366,
    //                false when DateTime.IsLeapYear(startDate.Year) => startDate.Month < 2 || isFeburary29 ? 366 : 365,
    //                false when DateTime.IsLeapYear(endDate.Year) => endDate.Month > 2 || isFeburary29 ? 366 : 365,
    //                _ => 365
    //            };
    //        }
    //        else {

    //            double tmp = 0.0;
    //            for (int y = startDate.Year; y <= endDate.Year; y++)
    //            {
    //                if (DateTime.IsLeapYear(y))
    //                {
    //                    tmp += 366.0;
    //                }
    //                else
    //                {
    //                    tmp += 365.0;
    //                }
    //            }
    //            daysInYear = tmp / (endDate.Year - startDate.Year + 1.0);
    //        }

    //    }

    //    duration = endDate - startDate;
    //    return duration.Days / daysInYear;
    //}

    public static double YearFracBase(this DateTime StartDate, DateTime EndDate, int Basis=0)
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

    public static double YearFraction(this DateTime StartDate, DateTime EndDate, int Basis = 1)
    {
        int nNumerator;
        double nDenom;

        nNumerator = StartDate.DaysBetween(EndDate);
        nDenom = YearFracBase(StartDate, EndDate, Basis);

        return nNumerator / nDenom;
    }


    public static int DaysBetween(this DateTime startDate, DateTime endDate)
    {
        TimeSpan difference = endDate - startDate;
        return difference.Days;
    }

    public static DateTime AddSemesters(this DateTime date, int semesters)
    {
        return date.AddMonths(-6 * semesters);
    }

    public static DateTime AddTrimesters(this DateTime date, int trimesters)
    {
        return date.AddMonths(-3 * trimesters);
    }
}