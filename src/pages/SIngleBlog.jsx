import { Link } from "react-router-dom";

const SIngleBlog = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-yellow-500 from-10% h-[250px] w-full flex justify-center items-center font-mono">
        <h1 className="text-4xl text-red-600 text-center font-semibold md:text-5xl">
          something heading
        </h1>
      </div>
      <div className="max-w-[1200px] mx-auto  font-mono">
        <div className="md:flex">
          <div className="px-4 my-4 md:w-[25%]">
            <h1 className="text-xl ">by someone</h1>
            <h1 className="text-xl">on something</h1>
          </div>
          <div className="px-6 my-4 md:w-[75%]">
            <p className="text-xl leading-8 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
              commodi reiciendis ratione incidunt qui iure, eaque rem eveniet
              est dolorum nihil rerum nisi ipsam molestiae consequatur
              perspiciatis eius ab illo explicabo esse, fugit labore odio odit
              porro! Deleniti cupiditate, quod voluptas totam nostrum omnis
              officiis, id in aliquid alias distinctio vero tempora, eaque
              dolorum magni. Enim commodi necessitatibus libero assumenda
              possimus doloremque aperiam ratione aut quasi nemo totam quaerat
              consectetur quas eius, accusantium natus nesciunt vitae sed?
              Explicabo harum sed cum aspernatur deserunt nesciunt. Nam odio,
              placeat libero neque suscipit cumque deserunt, fugiat ut eaque
              aliquid, maxime beatae consequuntur <br />
              nobis veniam quos architecto tempore alias? Est debitis,
              cupiditate eos ratione officia maiores omnis soluta quasi
              molestiae illum! Minima officiis eveniet culpa, consequatur
              laudantium dolorum pariatur corporis praesentium ullam eum!
              Suscipit dolor commodi illum eveniet libero eos accusamus
              voluptate nulla fugit minima distinctio soluta, cupiditate
              perspiciatis molestias iure mollitia! Dicta, error minima unde
              cumque debitis quasi rerum, nostrum ad doloremque eius at sed iure
              non? Error deserunt, voluptatem, provident, nobis repellendus
              possimus expedita consequuntur facilis repudiandae harum saepe?
              Veritatis, laudantium quam, explicabo temporibus fugiat dolorem
              tenetur nam officiis earum a nostrum quasi vitae, nesciunt odit.
              Velit natus sit tempora eligendi ipsum.
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit dolores tenetur veniam quia odio autem ea aut,
              incidunt quae, suscipit aperiam sequi expedita officia, itaque
              provident ipsum a debitis possimus cupiditate corporis laboriosam!
              Necessitatibus adipisci quae sint expedita officiis temporibus
              aliquid natus quam illo officia facilis eos culpa amet, mollitia
              voluptas deleniti. Blanditiis quae neque odio atque labore dolorem
              deleniti obcaecati nobis fugiat, quasi eligendi dolore. Quae
              tempora quidem sint similique aliquid, dolorum harum molestiae
              ipsa esse facere ipsam, dolorem at itaque ut corporis! Quisquam
              nihil blanditiis autem quaerat non ullam provident natus ipsam
              itaque eaque sed sunt, quod odit.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 my-12 border-t-2 border-slate-400 justify-evenly pt-8">
          <div className=" bg-cover object-cover max-w-[450px] min-h-[500px] flex flex-col justify-between shadow-lg hover:shadow-slate-400 hover:shadow-md rounded-lg font-mono ">
            <div className="h-[230px] bg-gradient-to-b from-yellow-500 from-10% rounded-md">
              <h1 className="text-4xl text-white font-sans font-medium mx-4 mt-4 ">
                something heading
              </h1>
            </div>
            <div className=" p-4 relative">
              <h2 className="text-2xl my-6 text-yellow-500">
                <Link to="/post/category">Category</Link>
              </h2>
              <p className="text-xl text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                doloremque blanditiis excepturi odit, tempore provident
                repudiandae doloremque blanditiis excepturi odit, tempore
                provident repudiandae
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
      </div>
    </div>
  );
};

export default SIngleBlog;
