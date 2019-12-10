using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Server.Services;

namespace Server.Installers.Services
{
    public class MvcInstallerServices : IInstallerServices
    {
        public void Install(IConfiguration configuration, IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddAutoMapper(typeof(Startup));

            services.AddSingleton<IUriService>(provider =>
            {
                var accesor = provider.GetRequiredService<IHttpContextAccessor>();
                var request = accesor.HttpContext.Request;
                var url = string.Concat(request.Scheme, "://", request.Host.ToUriComponent(), "/");
                return  new UriService(url);
            });

        }
    }
}
