using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Server.Installers.Services
{
    public class CorsServices : IInstallerServices
    {
        public void Install(IConfiguration configuration, IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder =>
                    {
                        builder
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                            .AllowAnyOrigin();
                    });
            });

            services.AddRouting(r => r.SuppressCheckForUnhandledSecurityMetadata = true);
        }
    }
}
