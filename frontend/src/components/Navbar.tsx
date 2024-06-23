import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white z-10">
      <div className="max-w-[1400px] mx-auto my-0 px-20 py-[10px] flex items-center justify-between">
        <Link to="/">
          <h1 className="font-bold text-4xl">Workout Body</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
