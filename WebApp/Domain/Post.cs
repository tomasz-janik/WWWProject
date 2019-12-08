using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Server.Domain
{
    public class Post
    {
        [Key]
        public Guid Id { set; get; }
        public string Name { set; get; }
        public DateTime Created { set; get; }
    }
}
