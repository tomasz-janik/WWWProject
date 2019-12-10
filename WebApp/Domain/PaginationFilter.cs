using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Domain
{
    public class PaginationFilter
    {
        public int PageNumber { set; get; }
        public int PageSize { set; get; }
    }
}
