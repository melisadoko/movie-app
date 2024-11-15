import logoPath from "../images/movie_logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-gray-700 p-4 items-center shadow-lg">
      <Link to="/" className="flex">
        <div>
          <img src={logoPath} alt="logo" className="h-8 w-auto" />
        </div>
        <div className="text-white font-bold text-2xl">Movie App</div>
      </Link>
    </nav>
  );
}
