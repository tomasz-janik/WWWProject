using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class CommentModel
    {
        public Guid Id { set; get; }
        public string Comment { set; get; }
        public DateTime Created { set; get; }
        public string Author { set; get; }
    }
}
