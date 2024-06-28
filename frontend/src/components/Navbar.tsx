import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white z-10">
      <div className="max-w-[1400px] m-[0_auto] p-[10px_20px] flex items-center justify-between">
        <Link to="/">
          <h1 className="font-bold text-4xl">Workout Body</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
