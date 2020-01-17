using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Options
{
    public class JWTSettings
    {
        public string Secret { set; get; }
        public TimeSpan TokenLifeTime { get; set; }
    }
}
