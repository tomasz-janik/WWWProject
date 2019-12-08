using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.v1.Requests
{
    public class CreatePostRequest
    {
        public string Name { set; get; }
        public string Description { set; get; }
    }
}
