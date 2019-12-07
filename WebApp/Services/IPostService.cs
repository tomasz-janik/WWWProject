using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Domain;

namespace Server.Services
{
    public interface IPostService
    {
        List<Post> GetPosts();
        Post GetPostById(int id);
        void AddPost(Post newPost);
        List<Post> GetPostInRange(int start, int end);
    }
}
