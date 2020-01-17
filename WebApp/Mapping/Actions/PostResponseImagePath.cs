using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Server.API.v1.Responses;
using Server.Domain;
using Server.Services.Interfaces;

namespace Server.Mapping.Actions
{
    public class PostResponseImagePath : IMappingAction<PostDb, PostResponse>
    {
        private readonly IUriService _uriService;

        public PostResponseImagePath(IUriService uriService)
        {
            _uriService = uriService;
        }

        public void Process(PostDb source, PostResponse destination, ResolutionContext context)
        {
            destination.Image = _uriService.GetImageUri(source.Image).ToString();
        }
    }
}
