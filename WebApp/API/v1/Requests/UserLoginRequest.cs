using System.ComponentModel.DataAnnotations;

namespace Server.API.v1.Requests
{
    public class UserLoginRequest
    {
        [EmailAddress]
        public string Email { set; get; }

        public string Password { get; set; }
    }
}