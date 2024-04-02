import { useEffect, useState } from "react";
import Blog from "../components/Blog";
import { getBlogs } from "../api/api";
import axios from "axios";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const [blogs, setBlogs] = useState();
  const [load, setLoad] = useState(false);

  const fetchBlogs = async () => {
    setLoad(true);

    try {
      const { data } = await axios.get(getBlogs());
      setBlogs(data.posts);
      setLoad(false);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
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

export default Home;
