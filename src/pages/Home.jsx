import { useContext, useEffect } from "react";
import Blog from "../components/Blog";
import Loader from "../components/Loader/Loader";
import { AppContext } from "../context/AppContext";
import Page from "../components/Page";
import { useSearchParams, useLocation } from "react-router-dom";

const Home = () => {
  const { fetchBlogs, load, blogs } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    fetchBlogs(Number(page));
    console.log(Number(page));
  }, [location.search]);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-wrap gap-8 items-center justify-evenly my-12 p-2">
        {load ? (
          <Loader />
        ) : (
          blogs?.map((blog) => {
            return <Blog blog={blog} key={blog.id} />;
          })
        )}
      </div>
      <Page />
    </div>
  );
};

export default Home;
