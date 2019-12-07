using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.API.v1;
using Server.Domain;

namespace Server.Controllers.v1
{
    public class PostController : Controller
    {
        private  readonly  List<Post> _posts;
     
        public PostController()
        {
            _posts = new List<Post>();
            for (var i = 0; i < 100; i++)
            {
                _posts.Add(new Post(){Id = Guid.NewGuid(), Name = $"TwojSmiesznyKot{i}"});
            }
        }

        [HttpGet(ApiRoutes.Posts.GetPosts)]
        public IActionResult GetPosts()
        {
            return Ok(_posts);
        }

        [HttpGet(ApiRoutes.Posts.Post)]
        public IActionResult GetPost([FromRoute]int postId)
        {
            return Ok(_posts.Skip(postId * 10).Take(10).ToList());
        }
    }
}
