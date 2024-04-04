import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import SIngleBlog from "./pages/SIngleBlog";
import BlogCategory from "./pages/BlogCategory";
import BlogTag from "./pages/BlogTag";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postdetail/:id" element={<SIngleBlog />} />
        <Route path="/post/:category" element={<BlogCategory />} />
        <Route path="/post/:tag" element={<BlogTag />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
