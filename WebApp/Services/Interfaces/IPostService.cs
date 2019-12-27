using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Server.Domain;
using Server.Models;

namespace Server.Services.Interfaces
{
    public interface IPostService
    {
        Task<List<PostDb>> GetPostsAsync(PaginationFilter paginationFilter = null);
        Task<PostDb> GetByGuidAsync(Guid id);
        Task<bool> AddPostAsync(PostDb postDb);
    }
}
