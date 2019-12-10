using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.v1.Requests.Queries
{
    public class PaginationQuery
    {
        public PaginationQuery()
        {
            PageNumber = 0;
            PageSize = 10;
        }
        public PaginationQuery(int pageNumber, int pageSize)
        {
            PageNumber = pageNumber;
            PageSize = pageSize;
        }
        public int PageNumber { set; get; }
        public int PageSize { set; get; }
    }
}
