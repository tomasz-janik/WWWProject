using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Domain;

namespace Server.Services
{
    public interface IPostService
    {
        Task<List<Post>> GetPosts();
        Task<List<Post>> GetRange(int start, int count);
        Task<Post> GetByGuid(Guid id);
        Task<bool> AddPost(Post post);
    }
}
