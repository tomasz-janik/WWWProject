using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Server.Domain
{
    public class CommentDb
    {
        [Key]
        public Guid Id { set; get; }
        public string Comment { set; get; }
        public DateTime Created { set; get; }
        public string UserId { set; get; }
        [ForeignKey(nameof(UserId))]
        public IdentityUser User { set; get; }
        public Guid PostId { set; get; }
        [ForeignKey(nameof(PostId))]
        public PostDb PostDb { set; get; }
    }
}
