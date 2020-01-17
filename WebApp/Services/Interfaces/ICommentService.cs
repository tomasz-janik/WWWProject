using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Domain;
using Server.Models;

namespace Server.Services.Interfaces
{
    public interface ICommentService
    {
        Task<List<CommentModel>> GetCommentsAsync(Guid PostId);
        Task<bool> AddCommentAsync(CommentDb commentDb);

        Task<bool> DeleteCommentAsync(Guid commentId);
    }
}
