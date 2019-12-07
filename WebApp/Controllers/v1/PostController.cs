using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.API.v1;
using Server.Domain;
using Server.Services;

namespace Server.Controllers.v1
{
    public class PostController : Controller
    {
        private readonly IPostService _postService;
        public PostController(IPostService postService)
        {
            _postService = postService;
        }
        [HttpGet(ApiRoutes.Posts.GetPosts)]
        public IActionResult GetPosts()
        {
            return Ok(_postService.GetPosts());
        }

        [HttpGet(ApiRoutes.Posts.Post)]
        public IActionResult GetPost([FromRoute]int postId)
        {
            return Ok(_postService.GetPostInRange(postId*10,postId*10+10));
        }
    }
}
