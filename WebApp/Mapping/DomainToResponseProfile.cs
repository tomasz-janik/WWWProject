using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Server.API.v1.Responses;
using Server.Domain;
using Server.Mapping.Actions;
using Server.Models;
using Server.Services.Interfaces;

namespace Server.Mapping
{
    public class DomainToResponseProfile : Profile
    {
        public DomainToResponseProfile()
        {
            CreateMap<PostDb, PostResponse>().AfterMap<PostResponseImagePath>();
            CreateMap<PostDb, CreatePostResponse>();

            CreateMap<AuthenticationResult, AuthFailedResponse>();
            CreateMap<AuthenticationResult, AuthSuccessResponse>();

           
        }
    }
}
