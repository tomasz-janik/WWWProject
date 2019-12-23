using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using IdentityServer4.Extensions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Server.API.v1;
using Server.API.v1.Requests;
using Server.API.v1.Requests.Queries;
using Server.API.v1.Responses;
using Server.Domain;
using Server.Extensions;
using Server.Helpers;
using Server.Models;
using Server.Services;

namespace Server.Controllers.v1
{
    [EnableCors("CorsPolicy")]
    public class PostsController : Controller
    {
        private readonly IPostService _postService;
        private readonly IMapper _mapper;
        private readonly IUriService _uriService;

        public PostsController(IPostService postService, IMapper mapper, IUriService uriService)
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

            return Ok(new DataResponse<PostResponse>(_mapper.Map<PostResponse>(post)));
        }

        [HttpPost(ApiRoutes.Posts.Create)]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> CreatePost([FromBody]CreatePostRequest postRequest)
        {
            var post = new Post
            {
                Description = postRequest.Description,
                Name = postRequest.Name,
                Created = DateTime.Now,
                UserId = HttpContext.GetUserId()
            };

           await _postService.AddPost(post);

           var locationUrl = _uriService.GetPostUri(post.Id.ToString());

           return Created(locationUrl, new DataResponse<CreatePostResponse>(_mapper.Map<CreatePostResponse>(post)));

        }
    }
}
