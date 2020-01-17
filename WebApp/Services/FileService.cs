using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Server.Services.Interfaces;

namespace Server.Services
{
    public class FileService : IFileService
    {
        public async Task<bool> SaveImageAsync(string name, IFormFile file, string path)
        {
            if (file == null || file.Length <= 0)
            {
                return false;
            }

            var filePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\images", path, name);

            await using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }
            return true;
        }
    }
}
