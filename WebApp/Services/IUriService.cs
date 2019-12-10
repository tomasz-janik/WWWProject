using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.API.v1.Requests.Queries;

namespace Server.Services
{
    public interface IUriService
    {
       
        Uri GetPostUri(string postId);
        Uri GetAllPostUri(PaginationQuery paginationQuery = null);
    }
}
