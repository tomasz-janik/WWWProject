using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;



namespace Server.Installers.Services
{
    public class SwaggerInstallerServices : IInstallerServices
    {
        public void Install(IConfiguration configuration, IServiceCollection services)
        {
            services.AddSwaggerGen(obj =>
            {
                obj.SwaggerDoc("v1", new OpenApiInfo { Title = "WWWProject API", Version = "v1" });
            });
        }
    }
}
