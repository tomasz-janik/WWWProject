using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.API.v1;

namespace Server.Controllers.v1
{
    public class PostController :Controller
    {
        [HttpGet(ApiRoutes.Posts.GetPosts)]
        public IActionResult GetPosts()
        {
            return Ok(new {id = "blabla"});
        }
    }
}
