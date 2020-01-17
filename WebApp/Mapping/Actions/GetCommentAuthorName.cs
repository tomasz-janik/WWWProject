using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Server.API.v1.Responses;
using Server.Data;
using Server.Domain;

namespace Server.Mapping.Actions
{
    public class GetCommentAuthorName : IMappingAction<CommentDb, CommentResponse>
    {
        private readonly ApplicationDbContext _applicationDb;

        public GetCommentAuthorName(ApplicationDbContext applicationDb)
        {
            _applicationDb = applicationDb;
        }

        public void Process(CommentDb source, CommentResponse destination, ResolutionContext context)
        {
          
        }
    }
}
