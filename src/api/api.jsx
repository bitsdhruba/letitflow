export const getBlogs = () => "https://codehelp-apis.vercel.app/api/get-blogs";

export const blogDetail = (id) =>
  `https://codehelp-apis.vercel.app/api/get-blog?blogId=${id}`;

export const blogpage = (page) =>
  `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;

export const blogtag = (tag) =>
  `https://codehelp-apis.vercel.app/api/get-blogs?page=1&${tag}`;

export const blogcategory = (category) =>
  `https://codehelp-apis.vercel.app/api/get-blogs?page=1&${category}`;
