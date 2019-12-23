using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Domain;
using Server.Models;

namespace Server.Services
{
    public class PostService : IPostService
    {
        private readonly ApplicationDbContext _applicationDb;


        public PostService(ApplicationDbContext applicationDb)
        {
            _applicationDb = applicationDb;
        }


        public async Task<List<Post>> GetPosts(PaginationFilter paginationFilter = null)
        {
            if (paginationFilter == null)
            {
                return await _applicationDb.Posts
                    .ToListAsync();
            }

            return await  _applicationDb.Posts.OrderByDescending(post => post.Created)
                .Skip(paginationFilter.PageSize*paginationFilter.PageNumber)
                .Take(paginationFilter.PageSize)
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
