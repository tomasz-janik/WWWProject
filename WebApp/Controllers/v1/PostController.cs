using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using IdentityServer4.Extensions;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Server.API.v1;
using Server.API.v1.Requests;
using Server.API.v1.Requests.Queries;
using Server.API.v1.Responses;
using Server.Domain;
using Server.Helpers;
using Server.Services;

namespace Server.Controllers.v1
{
    [EnableCors("CorsPolicy")]
    public class PostController : Controller
    {
        private readonly IPostService _postService;
        private readonly IMapper _mapper;
        public readonly IUriService _uriService;
        public PostController(IPostService postService, IMapper mapper, IUriService uriService)
        {
            _postService = postService;
            _mapper = mapper;
            _uriService = uriService;
        }
        [HttpGet(ApiRoutes.Posts.GetAll)]
        public async  Task<IActionResult> GetPosts([FromQuery] PaginationQuery paginationQuery)
        {
            var paginationFilter = _mapper.Map<PaginationFilter>(paginationQuery);

            var posts = await _postService.GetPosts(paginationFilter);
            var postsResponse = _mapper.Map<List<PostResponse>>(posts);

            if (paginationQuery == null || paginationQuery.PageNumber < 0 || paginationQuery.PageSize < 1)
            {
                return Ok(new PaginationResponse<PostResponse>(postsResponse));
            }

            return Ok(PaginationHelper.CreateResponse(_uriService, postsResponse, paginationFilter));
        }

        [HttpGet(ApiRoutes.Posts.GetOne)]
        public async  Task<IActionResult> GetPost([FromRoute]Guid postId)
        {
            var post = await _postService.GetByGuid(postId);

            if (post == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<PostResponse>(post));
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
