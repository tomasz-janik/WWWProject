using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Server.Extensions
{
    public static class HttpContexExtensions
    {
        public static string GetUserId(this HttpContext context)
        {
            if (context.User == null)
            {
                return string.Empty;
            }

            return context.User.Claims.Single(x => x.Type == "id").Value;
        }
    }
}
