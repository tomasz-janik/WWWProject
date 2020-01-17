using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Domain;
using Server.Models;
using Server.Services.Interfaces;

namespace Server.Services
{
    public class CommentService: ICommentService
    {
        private readonly ApplicationDbContext _applicationDb;

        public CommentService(ApplicationDbContext applicationDb)
        {
            _applicationDb = applicationDb;
        }

        public async Task<List<CommentModel>> GetCommentsAsync(Guid postId)
        {
            return await _applicationDb.Comments
                .Join(
                    _applicationDb.Users, 
                    comment => comment.UserId,
                    user => user.Id,
                    (com,user) => new { Comment = com, User = user})
                .Where(x => x.Comment.PostId == postId)
                .Select(x => new CommentModel
                {
                    Id = x.Comment.Id,
                    Comment =  x.Comment.Comment,
                    Created =  x.Comment.Created,
                    Author = x.User.Email
                }).ToListAsync();
        }

        public async Task<bool> AddCommentAsync(CommentDb commentDb)
        {
            await _applicationDb.Comments.AddAsync(commentDb);
            var created = await _applicationDb.SaveChangesAsync();
            return created > 0;
        }

        public async Task<bool> DeleteCommentAsync(Guid commentId)
        {
            var comment = await _applicationDb.Comments.SingleOrDefaultAsync(x=>x.Id == commentId);

            if (comment == null)
                return false;

            _applicationDb.Comments.Remove(comment);
            var deleted = await _applicationDb.SaveChangesAsync();
            return deleted > 0;
        }
    }
}
