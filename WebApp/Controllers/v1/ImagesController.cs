using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Server.API.v1;

namespace Server.Controllers.v1
{
    [EnableCors("CorsPolicy")]
    public class ImagesController : Controller
    {
        private readonly FileExtensionContentTypeProvider _fileExtension;

        public ImagesController(FileExtensionContentTypeProvider fileExtension)
        { 
            _fileExtension = fileExtension;
        }

        [HttpGet(ApiRoutes.Images.Post)]
        public IActionResult PostImage([FromRoute]string image)
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", "postDb", image);

            if (!System.IO.File.Exists(path))
            {
                return BadRequest("Image does not exist");
            }
           
            var file = new FileStream(path, FileMode.Open);
             
            _fileExtension.TryGetContentType(path, out var contentType);
            return File(file, contentType);
        }

    }
}
