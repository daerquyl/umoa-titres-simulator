﻿using System;
namespace Umoa.Titres.Interest.Simulator.Web.Api
{
	public static class Utils
	{
        public static double Round(double value)
        {
            var upper = Math.Ceiling(value);
            var lower = Math.Floor(value);

            return lower + 0.5 > value ? lower : upper;
        }
    }
}
