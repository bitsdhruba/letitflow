import axios from "axios";
import { createContext, useState } from "react";
import { getBlogs } from "../api/api";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [blogs, setBlogs] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [load, setLoad] = useState(false);

  const fetchBlogs = async (page) => {
    setLoad(true);

    try {
      const { data } = await axios.get(getBlogs(page));
      setBlogs(data.posts);
      setPage(data.page);
      setTotalPage(data.totalPages);
      setLoad(false);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  const navigate = useNavigate();

  const pageNumberHandler = (num) => {
    navigate({ search: `?page=${num}` });
    setPage(num);
  };

  const pageNavigator = (page) => {
    navigate({ search: `?page=${page}` });
    setPage(page);
  };

  const value = {
    fetchBlogs,
    blogs,
    load,
    page,
    setPage,
    totalPage,
    pageNavigator,
    pageNumberHandler,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
