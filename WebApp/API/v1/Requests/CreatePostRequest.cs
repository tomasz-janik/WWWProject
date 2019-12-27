using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Server.API.v1.Requests
{
    public class CreatePostRequest
    {
        public string Name { set; get; }
        public string Description { set; get; }
      
        public IFormFile Image { get; set; }
    }
}
