import axios from "axios";
import { createContext, useState } from "react";
import { getBlogs } from "../api/api";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [blogs, setBlogs] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [load, setLoad] = useState(false);

  const fetchBlogs = async () => {
    setLoad(true);

    try {
      const { data } = await axios.get(getBlogs(page));
      setBlogs(data.posts);
      setTotalPage(data.totalPages);
      setLoad(false);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  const value = {
    fetchBlogs,
    blogs,
    load,
    page,
    setPage,
    totalPage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
