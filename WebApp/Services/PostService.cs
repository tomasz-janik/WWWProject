using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Domain;

namespace Server.Services
{
    public class PostService : IPostService
    {
        private readonly List<Post> _posts;


        public PostService()
        {
            _posts = new List<Post>();
            for (var i = 0; i < 100; i++)
            {
                _posts.Add(new Post() { Id = Guid.NewGuid(), Name = $"TwojSmiesznyKot{i}" });
            }
        }

        public List<Post> GetPosts()
        {
            return _posts;
        }

        public Post GetPostById(int id)
        {
            return _posts[id];
        }

        public void AddPost(Post newPost)
        {
         _posts.Add(newPost);
        }

        public List<Post> GetPostInRange(int start, int end)
        {
            return _posts.Skip(start).Take(end - start).ToList();
        }
    }
}
