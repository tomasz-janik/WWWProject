using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Server.API.v1.Requests;
using Server.API.v1.Requests.Queries;
using Server.Domain;
using Server.Models;

namespace Server.Mapping
{
    public class RequestToDomainProfile : Profile
    {
        public RequestToDomainProfile()
        {
            CreateMap<PaginationQuery, PaginationFilter>();
            CreateMap<CreatePostRequest, Post>();
        }
    }
}
