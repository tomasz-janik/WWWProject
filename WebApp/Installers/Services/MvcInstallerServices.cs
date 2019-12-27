using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Server.Services;
using Server.Services.Interfaces;

namespace Server.Installers.Services
{
    public class MvcInstallerServices : IInstallerServices
    {
        public void Install(IConfiguration configuration, IServiceCollection services)
        {
            //services.AddControllersWithViews();
            services.AddDirectoryBrowser();

            services.AddAutoMapper(typeof(Startup));

            services.AddSingleton<IFileService, FileService>();
            services.AddSingleton(new FileExtensionContentTypeProvider());

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
