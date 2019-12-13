using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Server.API.v1;
using Server.API.v1.Requests;
using Server.API.v1.Responses;
using Server.Domain;
using Server.Services;

namespace Server.Controllers.v1
{
    public class IdentityController : Controller
    {
        private readonly IIdentityService _identityService;
        private readonly IMapper _mapper;

        public IdentityController(IIdentityService identityService, IMapper mapper)
        {
            _identityService = identityService;
            _mapper = mapper;
        }

        [HttpPost(ApiRoutes.Identity.Register)]
        public async Task<IActionResult> Register([FromBody] UserRegistrationRequest userRegistration)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new AuthFailedResponse
                {
                    Errors = ModelState.Values.SelectMany(x=> x.Errors.Select(err => err.ErrorMessage))
                });
            }
            var authResult = await _identityService.RegisterAsync(userRegistration.Email, userRegistration.Password);

            if (!authResult.Success)
            {
                return BadRequest(_mapper.Map<AuthFailedResponse>(authResult));
            }

            return Ok(_mapper.Map<AuthSuccessResponse>(authResult));
        }

        [HttpPost(ApiRoutes.Identity.Login)]
        public async Task<IActionResult> Login([FromBody] UserLoginRequest userLogin)
        {
            var authResult = await _identityService.LoginAsync(userLogin.Email, userLogin.Password);

            if (!authResult.Success)
            {
                return BadRequest(_mapper.Map<AuthFailedResponse>(authResult));
            }

            return Ok(_mapper.Map<AuthSuccessResponse>(authResult));
        }
    }
}
