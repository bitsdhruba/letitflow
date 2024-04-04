import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <div className=" bg-cover object-cover max-w-[450px] min-h-[500px] flex flex-col justify-between shadow-md shadow-slate-300 hover:shadow-slate-400 hover:shadow-lg rounded-lg font-mono ">
      <div className="h-[230px] bg-gradient-to-b from-[#FCBF49] from-10% rounded-md">
        <h1 className="text-3xl text-[#003049] text-center font-medium mx-4 mt-8">
          {blog.title}
        </h1>
        <h2 className="text-2xl text-[#F77F00] mx-4 mt-12">
          <Link to={`/post/${blog.category}`}>
            {blog.category.replaceAll(" ", "-")}
          </Link>
        </h2>
      </div>
      <div className=" p-4 relative h-full">
        <h2 className="text-xl text-[#f78000ce] mb-8">By {blog.author}</h2>
        <p className="text-xl text-justify">{blog.content.slice(0, 200)}</p>
        <div className="bg-gradient-to-t from-white from-40% absolute bottom-0 w-[95%] h-28 flex items-end justify-center">
          <Link to={`/postdetail/${blog.id}`}>
            <button className="bg-gradient-to-t from-[#D62828] to-white from-70%  p-2 rounded-xl my-2 text-white text-lg font-medium">
              Continue Reading
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
