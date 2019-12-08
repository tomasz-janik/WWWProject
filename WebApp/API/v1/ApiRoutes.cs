
namespace Server.API.v1
{
    public static class ApiRoutes
    {
        public const string Version = "v1";
        public const string Root = "api";
        public const  string BaseRoot = Root + "/" + Version;

        public static class Posts
        {
            public const string Get = BaseRoot + "/posts";
            public const string Create = BaseRoot + "/posts";
            public const string GetOne = BaseRoot + "/post/{postId}";
        }
    }
}
