import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Page = () => {
  const { page, setPage, totalPage } = useContext(AppContext);

  const pagehandler = (pagenum) => {
    setPage(pagenum);
    console.log("clicked", pagenum);
  };

  const prevpagehandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
    console.log("clicked", page);
  };
  const nextpagehandler = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
    console.log("clicked", page);
  };

  return (
    <div className="p-2 max-w-[1200px] mx-auto flex justify-evenly mb-12">
      <button
        className="border-2 border-red-600 rounded-full p-1 md:p-2 size-10 md:size-12 text-center"
        onClick={() => prevpagehandler()}
      >
        <GrPrevious className="mx-auto" />
      </button>
      {[...Array(totalPage)].map((_, i) => {
        return (
          <button
            key={i}
            className="border-2 border-red-600 rounded-full p-1 md:p-2 size-10 md:size-12 text-center"
            onClick={() => pagehandler(i + 1)}
          >
            {i + 1}
          </button>
        );
      })}
      <button
        className="border-2 border-red-600 rounded-full p-1 md:p-2 size-10 md:size-12 text-center"
        onClick={() => nextpagehandler()}
      >
        <GrNext className="mx-auto" />
      </button>
    </div>
  );
};

export default Page;
