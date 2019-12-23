using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Server.API.v1.Responses;
using Server.Domain;
using Server.Models;

namespace Server.Mapping
{
    public class DomainToResponseProfile : Profile
    {
        public DomainToResponseProfile()
        {
            CreateMap<Post, PostResponse>();
            CreateMap<Post, CreatePostResponse>();

            CreateMap<AuthenticationResult, AuthFailedResponse>();
            CreateMap<AuthenticationResult, AuthSuccessResponse>();

        }
    }
}
