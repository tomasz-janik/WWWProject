using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{

    public class TestController : ControllerBase
    {
        [HttpGet("api/test")]
        public IActionResult test ()
        {
            return Ok(new { message = " test" });
        }
    }
}