import axios from "axios";
import { useEffect, useState } from "react";
import { blogcategory } from "../api/api";
import { useLocation, useSearchParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Blog from "../components/Blog";
import Page from "../components/Page";

const BlogCategory = () => {
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const [blogCategory, setBlogCategory] = useState();
  const [load, setLoad] = useState(false);

  const fetchCategory = async (page) => {
    setLoad(true);
    try {
      const { data } = await axios.get(blogcategory(category, page));
      setBlogCategory(data.posts);
      setPage(data.page);
      setTotalPage(data.totalPages);
      setLoad(false);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    const pagenum = searchParams.get("page") ?? 1;
    fetchCategory(Number(pagenum));
  }, [location.pathname, location.search]);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mt-12">
        <h1 className="capitalize text-center text-[#003049] text-3xl md:text-4xl">
          Blogs on {category}
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-evenly my-12 p-2">
        {load ? (
          <Loader />
        ) : (
          blogCategory?.map((blog) => {
            return <Blog blog={blog} key={blog.id} />;
          })
        )}
      </div>
      <Page page={page} totalPage={totalPage} />
    </div>
  );
};

export default BlogCategory;
