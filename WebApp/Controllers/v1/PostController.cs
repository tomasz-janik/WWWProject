using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.Extensions;
using Microsoft.AspNetCore.Mvc;
using Server.API.v1;
using Server.API.v1.Requests;
using Server.API.v1.Responses;
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
        [HttpGet(ApiRoutes.Posts.Get)]
        public async  Task<IActionResult> GetPosts()
        {
            return Ok(await _postService.GetPosts());
        }

        [HttpGet(ApiRoutes.Posts.GetOne)]
        public async  Task<IActionResult> GetPost([FromRoute]Guid postId)
        {
            var post = await _postService.GetByGuid(postId);

            if (post == null)
                return NotFound();

            return Ok(post);
        }

        [HttpGet(ApiRoutes.Posts.GetRange)]
        public async Task<IActionResult> GetPost([FromRoute]int start, int count = 10)
        {
            var post = await _postService.GetRange(start,count);

            if (post.IsNullOrEmpty())
                return NotFound();

            return Ok(post);
        }

        [HttpPost(ApiRoutes.Posts.Create)]
        public async Task<IActionResult> CreatePost([FromBody]CreatePostRequest postRequest)
        {
            var post = new Post
            {
                Description = postRequest.Description,
                Name = postRequest.Name,
                Created = DateTime.Now
            };

           await _postService.AddPost(post);

           var baseUrl = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.ToUriComponent()}";
           var locationUrl = $"{baseUrl}/{ApiRoutes.Posts.GetOne.Replace("{postId}", post.Id.ToString())}";

           return Created(locationUrl, new CreatePostResponse{Id = post.Id});

        }
    }
}
