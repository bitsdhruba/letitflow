import axios from "axios";
import { createContext, useState } from "react";
import { getBlogs } from "../api/api";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [blogs, setBlogs] = useState();
  const [load, setLoad] = useState(false);

  const fetchBlogs = async () => {
    setLoad(true);

    try {
      const { data } = await axios.get(getBlogs());
      setBlogs(data.posts);
      setLoad(false);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  const value = {
    fetchBlogs,
    blogs,
    load,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
