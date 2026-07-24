import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="gap-4 p-4 bg-gray-200 flex justify-center">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;