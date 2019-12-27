
namespace Server.API.v1
{
    public static class ApiRoutes
    {
        public const string Version = "v1";
        public const string Root = "api";
        public const  string BaseRoot = Root + "/" + Version;

        public static class Posts
        {
            public const string GetPosts = BaseRoot + "/posts";
            public const string Create = BaseRoot + "/posts";
            public const string GetOne = BaseRoot + "/posts/{postId}";
        }

        public static class Images
        {
            public const string Post = BaseRoot + "/images/postDb/{image}";
        }

        public static class  Comment
        {
            public const string Add = BaseRoot + "/comments";
            public const string GetAll = BaseRoot + "/comments/{postId}";
            public const string Remove = BaseRoot + "/comments/{commentId}";
        }

        public static class Identity
        {
            public const string Login = BaseRoot + "/identity/login";
            public const string Register = BaseRoot + "/identity/register";
            public const string Refresh = BaseRoot + "/identity/refresh";
        }


    }
}
