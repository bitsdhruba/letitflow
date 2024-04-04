import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loader from "../components/Loader/Loader";
import Blog from "../components/Blog";

const BlogTag = () => {
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  const { blogs, load } = useContext(AppContext);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mt-12">
        <h1 className="text-3xl md:text-4xl text-center text-[#003049]">
          Blogs on {tag}
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-evenly my-12">
        {load ? (
          <Loader />
        ) : (
          blogs?.map((blog) => {
            return <Blog blog={blog} key={blog.id} />;
          })
        )}
      </div>
    </div>
  );
};

export default BlogTag;
