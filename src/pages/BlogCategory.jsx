import axios from "axios";
import { useEffect, useState } from "react";
import { blogcategory } from "../api/api";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Blog from "../components/Blog";
import Page from "../components/Page";

const BlogCategory = () => {
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  const [blogCategory, setBlogCategory] = useState();
  const [load, setLoad] = useState(false);

  const fetchCategory = async () => {
    setLoad(true);
    try {
      const { data } = await axios.get(blogcategory(category));
      setBlogCategory(data.posts);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [location.pathname]);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mt-12">
        <h1 className="capitalize text-center text-[#003049] text-4xl">
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
      <Page />
    </div>
  );
};

export default BlogCategory;
