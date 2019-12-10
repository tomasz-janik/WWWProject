using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.v1.Responses
{
    public class DataResponse<T>
    {
        public DataResponse()
        {

        }
        public DataResponse(T data)
        {
            Data = data;
        }
        public T Data { set; get; }
       
    }
}
