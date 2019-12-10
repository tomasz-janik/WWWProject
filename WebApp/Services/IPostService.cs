using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Domain;

namespace Server.Services
{
    public interface IPostService
    {
        Task<List<Post>> GetPosts(PaginationFilter paginationFilter = null);
        Task<Post> GetByGuid(Guid id);
        Task<bool> AddPost(Post post);
    }
}
