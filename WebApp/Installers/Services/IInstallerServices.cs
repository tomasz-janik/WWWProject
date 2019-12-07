
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Server.Installers.Services
{
    public interface IInstallerServices
    {
        void Install(IConfiguration configuration, IServiceCollection services);
    }
}