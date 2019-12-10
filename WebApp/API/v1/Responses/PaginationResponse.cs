using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.v1.Responses
{
    public class PaginationResponse<T>
    {
        public PaginationResponse()
        {
            
        }
        public PaginationResponse(IEnumerable<T> data)
        {
            Data = data;
        }
        public IEnumerable<T> Data { set; get; }
        public int PageNumber { set; get; }
        public int PageSize { set; get; }
        public string PreviousPage { set; get; }
        public string NextPage { set; get; }
    }
}
