using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Domain;

namespace Server.Services
{
    public class PostService : IPostService
    {
        private readonly ApplicationDbContext _applicationDb;


        public PostService(ApplicationDbContext applicationDb)
        {
            _applicationDb = applicationDb;
        }


        public async Task<List<Post>> GetPosts()
        {
            return await _applicationDb.Posts
                .ToListAsync();
        }

        public async Task<List<Post>> GetRange(int start, int count)
        {
            return await _applicationDb.Posts
                .OrderByDescending(post=>post.Created)
                .Skip(start)
                .Take(count)
                .ToListAsync();
        }


        public async Task<Post> GetByGuid(Guid id)
        {
            return await _applicationDb.Posts
                .SingleOrDefaultAsync(post => post.Id == id);
        }

        public async Task<bool> AddPost(Post post)
        {
            await _applicationDb.Posts.AddAsync(post);
            var created = await _applicationDb.SaveChangesAsync();
            return created > 0;
        }
    }
}
