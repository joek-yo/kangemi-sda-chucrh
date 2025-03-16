// 📌 File: src/components/Navbar.tsx

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State for toggling mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Church Logo */}
        <Link to="/" className="text-2xl font-bold">
          SDA Kangemi
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/ministries" className="hover:text-yellow-400">Ministries</Link></li>
          <li><Link to="/sermons" className="hover:text-yellow-400">Sermons</Link></li>
          <li><Link to="/events" className="hover:text-yellow-400">Events</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-800 p-4 space-y-3 text-center">
          <li><Link to="/" className="block hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="block hover:text-yellow-400">About</Link></li>
          <li><Link to="/ministries" className="block hover:text-yellow-400">Ministries</Link></li>
          <li><Link to="/sermons" className="block hover:text-yellow-400">Sermons</Link></li>
          <li><Link to="/events" className="block hover:text-yellow-400">Events</Link></li>
          <li><Link to="/contact" className="block hover:text-yellow-400">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
