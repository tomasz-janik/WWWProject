using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Server.Domain
{
    public class PostDb
    {
        [Key]
        public Guid Id { set; get; }
        public string Name { set; get; }
        public string Description { set; get; }
        public DateTime Created { set; get; }
        public string Image { set; get; }
        public string UserId { set; get; }
        [ForeignKey(nameof(UserId))]
        public IdentityUser User { set; get; }
    }
}
