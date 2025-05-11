import { GoRepo } from "react-icons/go";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <GoRepo className="text-green-400 mr-2 text-xl" />
          <Link to="/">
            <h1 className="text-xl font-bold">RepoCleanr</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
