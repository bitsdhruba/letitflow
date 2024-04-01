import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="flex flex-wrap gap-8 items-center justify-evenly ">
      <div className=" bg-cover object-cover max-w-[450px] min-h-[500px] flex flex-col justify-between shadow-lg hover:shadow-slate-400 hover:shadow-md rounded-lg font-mono ">
        <div className="h-[230px] bg-gradient-to-b from-yellow-500 from-10% rounded-md">
          <h1 className="text-4xl text-white font-sans font-medium mx-4 mt-8 ">
            something heading
          </h1>
        </div>
        <div className=" p-4 relative">
          <h2 className="text-2xl my-6 text-yellow-500">
            <Link to="/post/category">Category</Link>
          </h2>
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            doloremque blanditiis excepturi odit, tempore provident repudiandae
            doloremque blanditiis excepturi odit, tempore provident repudiandae
          </p>
          <div className="bg-gradient-to-t from-white from-40% absolute bottom-0 w-[95%] h-28 flex items-end justify-center">
            <Link to="/post/id">
              <button className="bg-gradient-to-t from-yellow-400 to-white from-70%  p-2 rounded-xl my-2 text-lg font-medium">
                Continue Reading
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
