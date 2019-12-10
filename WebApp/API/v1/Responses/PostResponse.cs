using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.v1.Responses
{
    public class PostResponse
    {
        public string Name { set; get; }
        public string Description { set; get; }
        public DateTime Created { set; get; }
    }
}
