using System;
using Server.API.v1.Requests.Queries;

namespace Server.Services.Interfaces
{
    public interface IUriService
    {
       
        Uri GetPostUri(string postId);
        Uri GetImageUri(string image);
        Uri GetAllPostUri(PaginationQuery paginationQuery = null);
    }
}
