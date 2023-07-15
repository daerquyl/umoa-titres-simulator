using System;
namespace Umoa.Titres.Interest.Simulator.Web.Api
{
	public static class CFAFormatter
	{
		public static string ToCFA(this double value)
		{
			var strValue = value.ToString("### ### ### ### ### ### ### ### ### ###").Trim();
			return string.IsNullOrEmpty(strValue) || strValue == "-" ? "0" : strValue;
		}
	}
}

