using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;

namespace Server.Services.Interfaces
{
    public interface IFileService
    {
        Task<bool> SaveImageAsync(string name, IFormFile file, string path);
    }
}
