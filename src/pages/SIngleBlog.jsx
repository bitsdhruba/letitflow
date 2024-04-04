import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { blogDetail } from "../api/api";
import Blog from "../components/Blog";
import Loader from "../components/Loader/Loader";

const SIngleBlog = () => {
  const [blogdetail, setBlogdetail] = useState();
  const [relatedBlogs, setRelatedBlogs] = useState();
  const [load, setLoad] = useState(false);

  const location = useLocation();

  const blogid = location.pathname.split("/").at(-1);

  const fetchBlogs = async () => {
    setLoad(true);

    try {
      const { data } = await axios.get(blogDetail(blogid));
      setBlogdetail(data.blog);
      setRelatedBlogs(data.relatedBlogs);
      setLoad(false);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [blogid]);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div>
          <div className="bg-gradient-to-b from-[#FCBF49] from-10% h-[250px] w-full flex justify-center items-center font-mono">
            <div className="md:w-4/5 md:mx-auto">
              <h1 className="text-4xl text-[#003049] text-center font-semibold md:text-5xl">
                {blogdetail?.title}
              </h1>
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto  font-mono">
            <div className="md:flex">
              <div className="px-4 my-4 md:w-[25%] flex flex-col justify-between">
                <div>
                  <img
                    src={blogdetail?.img}
                    alt="thumbnail"
                    loading="lazy"
                    className="w-full rounded-lg border-2 border-white aspect-square object-cover"
                  />
                  <h1 className="text-xl my-8 text-[#F77F00] hover:text-[#003049]">
                    <Link to={`/post/${blogdetail?.category}`}>
                      {blogdetail?.category}
                    </Link>
                  </h1>
                  <h1 className="text-xl my-4">{blogdetail?.author}</h1>
                  <h1 className="text-xl my-2">{blogdetail?.date}</h1>
                </div>
                <div className="flex flex-wrap">
                  {blogdetail?.tags.map((tag, index) => {
                    return (
                      <Link to={`/post/${tag}`} key={index}>
                        <span className="text-lg hover:text-[#003049]  mx-2">
                          #{tag.replaceAll(" ", "-")}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="px-6 my-4 md:w-[75%]">
                <p className="text-xl leading-8 text-justify">
                  {blogdetail?.content}
                  <br />
                  <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Debitis, commodi reiciendis ratione incidunt qui iure, eaque
                  rem eveniet est dolorum nihil rerum nisi ipsam molestiae
                  consequatur perspiciatis eius ab illo explicabo esse, fugit
                  labore odio odit porro! Deleniti cupiditate, quod voluptas
                  totam nostrum omnis officiis, id in aliquid alias distinctio
                  vero tempora, eaque dolorum magni. Enim commodi necessitatibus
                  libero assumenda possimus doloremque aperiam ratione aut quasi
                  nemo totam quaerat consectetur quas eius, accusantium natus
                  nesciunt vitae sed? Explicabo harum sed cum aspernatur
                  deserunt nesciunt. Nam odio, placeat libero neque suscipit
                  cumque deserunt, fugiat ut eaque aliquid, maxime beatae
                  consequuntur <br />
                  nobis veniam quos architecto tempore alias? Est debitis,
                  cupiditate eos ratione officia maiores omnis soluta quasi
                  molestiae illum! Minima officiis eveniet culpa, consequatur
                  laudantium dolorum pariatur corporis praesentium ullam eum!
                  Suscipit dolor commodi illum eveniet libero eos accusamus
                  voluptate nulla fugit minima distinctio soluta, cupiditate
                  perspiciatis molestias iure mollitia! Dicta, error minima unde
                  cumque debitis quasi rerum, nostrum ad doloremque eius at sed
                  iure non? Error deserunt, voluptatem, provident, nobis
                  repellendus possimus expedita consequuntur facilis repudiandae
                  harum saepe? Veritatis, laudantium quam, explicabo temporibus
                  fugiat dolorem tenetur nam officiis earum a nostrum quasi
                  vitae, nesciunt odit. Velit natus sit tempora eligendi ipsum.
                  <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit dolores tenetur veniam quia odio autem ea aut,
                  incidunt quae, suscipit aperiam sequi expedita officia, itaque
                  provident ipsum a debitis possimus cupiditate corporis
                  laboriosam! Necessitatibus adipisci quae sint expedita
                  officiis temporibus aliquid natus quam illo officia facilis
                  eos culpa amet, mollitia voluptas deleniti. Blanditiis quae
                  neque odio atque labore dolorem deleniti obcaecati nobis
                  fugiat, quasi eligendi dolore. Quae tempora quidem sint
                  similique aliquid, dolorum harum molestiae ipsa esse facere
                  ipsam, dolorem at itaque ut corporis! Quisquam nihil
                  blanditiis autem quaerat non ullam provident natus ipsam
                  itaque eaque sed sunt, quod odit.
                </p>
              </div>
            </div>

            <div className=" my-12 border-t-2 border-slate-400  pt-8">
              <div className="my-8">
                <h2 className="text-3xl text-[#003049] text-center font-medium md:text-4xl">
                  Related Blogs
                </h2>
              </div>
              <div className="flex flex-wrap gap-12 justify-evenly p-2">
                {load ? (
                  <Loader />
                ) : (
                  relatedBlogs?.map((blog) => {
                    return <Blog blog={blog} key={blog.id} />;
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SIngleBlog;
