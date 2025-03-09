import { Link, NavLink } from "react-router-dom";
// Link : Works like an <a> tag but prevents full page reload,without any active state styling.
// NavLink is like Link, but it automatically applies styles when active.

function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img
            src="https://marketplace.canva.com/EAF1Ah5STk8/1/0/1600w/canva-dark-abstract-black-panther-gaming-logo-JqcoEpC3-BI.jpg" // Replace with your logo path
            alt="Logo"
            className="h-10 w-10 rounded-full mr-2 object-cover"
          />
          <span className="text-gray-900">
            My <span className="text-red-500">App</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6 text-gray-700 font-medium">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-red-500 font-bold" : "hover:text-red-500")}>
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-red-500">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:text-red-500">
            Contact
          </NavLink>
          <NavLink to="/github" className="hover:text-red-500">
            Github
          </NavLink>
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-red-500">
            Log in
          </Link>
          <Link to="/signup" className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
