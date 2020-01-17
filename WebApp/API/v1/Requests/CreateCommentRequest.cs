using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.v1.Requests
{
    public class CreateCommentRequest
    {
        public Guid PostId { set; get; }
        public string Comment { set; get; }
    }
}
