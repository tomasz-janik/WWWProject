﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.v1.Responses
{
    public class AuthFailedResponse 
    {
        public IEnumerable<string> Errors { get; set; }
    }
}
