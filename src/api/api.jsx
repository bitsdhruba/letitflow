export const getBlogs = (page) =>
  `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;

export const blogDetail = (id) =>
  `https://codehelp-apis.vercel.app/api/get-blog?blogId=${id}`;

export const blogcategory = (category, page) =>
  `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}&category=${category}`;
