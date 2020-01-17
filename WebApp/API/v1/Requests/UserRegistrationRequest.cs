 using System;
using System.Collections.Generic;
 using System.ComponentModel.DataAnnotations;
 using System.Linq;
using System.Threading.Tasks;

namespace Server.API.v1.Requests
{
    public class UserRegistrationRequest
    {
        [EmailAddress]
        public string Email { set; get; }

        public string Password { get; set; }    
    }
}
