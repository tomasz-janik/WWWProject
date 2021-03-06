﻿using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Server.Domain;

namespace Server.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public  DbSet<PostDb> Posts { set; get; }
        public DbSet<RefreshTokenDb> RefreshTokens { set; get; }
        public DbSet<CommentDb> Comments { get; set; }
    }
}
