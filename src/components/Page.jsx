import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Page = () => {
  const { setPage, totalPage } = useContext(AppContext);

  const pagehandler = (pagenum) => {
    setPage(pagenum);
  };

  return (
    <div className="p-2 max-w-[1200px] mx-auto flex justify-evenly mb-12">
      <button className="border-2 border-red-600 rounded-full p-2 size-12 text-center">
        Prev
      </button>
      {[...Array(totalPage)].map((_, i) => {
        return (
          <button
            key={i}
            className="border-2 border-red-600 rounded-full p-2 size-12 text-center"
            onClick={() => pagehandler(i + 1)}
          >
            {i + 1}
          </button>
        );
      })}
      <button className="border-2 border-red-600 rounded-full p-2 size-12 text-center">
        Next
      </button>
    </div>
  );
};

export default Page;
