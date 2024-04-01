import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full h-[7vh] bg-red-600 flex items-center justify-center">
      <div>
        <Link to="/">
          <h1 className="text-center text-3xl text-white font-mono">flow</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
