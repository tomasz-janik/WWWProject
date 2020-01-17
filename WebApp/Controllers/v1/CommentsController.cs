using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.API.v1;
using Server.API.v1.Requests;
using Server.API.v1.Requests.Queries;
using Server.API.v1.Responses;
using Server.Domain;
using Server.Extensions;
using Server.Models;
using Server.Services.Interfaces;

namespace Server.Controllers.v1
{

    public class CommentsController : Controller
    {
        private readonly ICommentService _commentService;
        public CommentsController(ICommentService commentService, IMapper mapper)
        {
            _commentService = commentService;
        }

        [HttpGet(ApiRoutes.Comment.GetAll)]
        public async Task<IActionResult> GetComments([FromRoute] Guid postId)
        {
            var comments = await _commentService.GetCommentsAsync(postId);
            return Ok(new DataResponse<List<CommentModel>>(comments));
        }

        [HttpPost(ApiRoutes.Comment.Add)]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin,User")]
        public async Task<IActionResult> AddComment([FromBody] CreateCommentRequest commentRequest)
        {
            var newCommentDb = new CommentDb
            {
                Comment = commentRequest.Comment,
                PostId = commentRequest.PostId,
                Created = DateTime.Now,
                UserId = HttpContext.GetUserId(),
            };

            var result = await _commentService.AddCommentAsync(newCommentDb);
            if (!result)
            {
                return BadRequest("Unable to create Comment");
            }

            return Ok();
        }

        [HttpDelete(ApiRoutes.Comment.Remove)]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        public async Task<IActionResult> RemoveComment([FromRoute] Guid commentId)
        {
            var deleted = await _commentService.DeleteCommentAsync(commentId);

            if (deleted)
                return Ok();

            return NotFound();
        }
    }
}
