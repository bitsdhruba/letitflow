import { useContext } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { AppContext } from "../context/AppContext";

const Page = ({ page, totalPage }) => {
  const { pageNumberHandler, pageNavigator } = useContext(AppContext);

  return (
    <div className="p-2 max-w-[1200px] mx-auto flex justify-evenly mb-12">
      {page > 1 && (
        <button
          className="border-2 border-red-600 rounded-full p-1 md:p-2 size-10 md:size-12 text-center hover:bg-[#d6282869] hover:shadow-lg shadow-slate-400"
          onClick={() => pageNavigator(page - 1)}
        >
          <GrPrevious className="mx-auto" />
        </button>
      )}

      {[...Array(totalPage)].map((_, i) => {
        return (
          <button
            key={i}
            className={
              page === i + 1
                ? "border-2 border-red-600 rounded-full p-1 md:p-2 size-10 md:size-12 text-center bg-[#002f4952]"
                : "border-2 border-red-600 rounded-full p-1 md:p-2 size-10 md:size-12 text-center hover:bg-[#d6282869]"
            }
            onClick={() => pageNumberHandler(i + 1)}
          >
            {i + 1}
          </button>
        );
      })}
      {page < totalPage && (
        <button
          className="border-2 border-red-600 rounded-full p-1 md:p-2 size-10 md:size-12 text-center hover:bg-[#d628286e] hover:shadow-lg shadow-slate-400"
          onClick={() => pageNavigator(page + 1)}
        >
          <GrNext className="mx-auto" />
        </button>
      )}
    </div>
  );
};

export default Page;
