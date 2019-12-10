using System;
using Microsoft.AspNetCore.WebUtilities;
using Server.API.v1;
using Server.API.v1.Requests.Queries;

namespace Server.Services
{
    public class UriService : IUriService
    {
        private readonly string _baseUri;
        public UriService(string baseUri)
        {
            _baseUri = baseUri;
        }

        public Uri GetPostUri(string postId)
        {
            return new Uri(_baseUri+ApiRoutes.Posts.GetOne.Replace("{postId}",postId));
        }

        public Uri GetAllPostUri(PaginationQuery paginationQuery = null)
        {
         
          if (paginationQuery == null)
          {
              return new Uri(_baseUri);
          }

          var pagiUri = QueryHelpers.AddQueryString(_baseUri, "pageNumber", paginationQuery.PageNumber.ToString());
          pagiUri = QueryHelpers.AddQueryString(pagiUri, "pageSize", paginationQuery.PageSize.ToString());

          return new Uri(pagiUri);        }
    }
}