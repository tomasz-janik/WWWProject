using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Server.Installers.Services
{
    public class MvcInstallerServices : IInstallerServices
    {
        public void Install(IConfiguration configuration, IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddRazorPages();

        }
    }
}
