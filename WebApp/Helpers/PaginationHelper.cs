using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.API.v1.Requests.Queries;
using Server.API.v1.Responses;
using Server.Domain;
using Server.Models;
using Server.Services;
using Server.Services.Interfaces;

namespace Server.Helpers
{
    public static class PaginationHelper
    {
        public static PaginationResponse<T> CreateResponse<T>(IUriService uriService, List<T> postsResponse, PaginationFilter paginationFilter)
        {
            var prevPath = paginationFilter.PageNumber > 1
                ? uriService.GetAllPostUri(new PaginationQuery(paginationFilter.PageNumber - 1, paginationFilter.PageSize)).ToString()
                : null;

            var nextPath =
                uriService.GetAllPostUri(new PaginationQuery(paginationFilter.PageNumber + 1, paginationFilter.PageSize))
                    .ToString();

            return new PaginationResponse<T>
            {
                Data = postsResponse,
                PageSize = paginationFilter.PageSize,
                PageNumber = paginationFilter.PageNumber,
                PreviousPage = prevPath,
                NextPage = postsResponse.Any() ? nextPath : null
            };

        }
    }
}
