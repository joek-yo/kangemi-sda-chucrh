import { Link } from "react-router-dom";
import logo from "../assets/Logo SDA.png"; 

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-6 text-center">
      {/* Church Logo and Name */}
      <div className="flex flex-col items-center">
        <Link to="/">
          <img src={logo} alt="SDA Logo" className="h-12 w-auto mb-2 hover:opacity-80 transition-opacity duration-200" />
        </Link>
        <p className="text-lg font-semibold">Seventh-day Adventist Church, Kangemi</p>
      </div>

      {/* Copyright */}
      <p className="text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-3">
        <Link to="https://facebook.com" target="_blank" className="hover:text-yellow-400">Facebook</Link>
        <Link to="https://twitter.com" target="_blank" className="hover:text-yellow-400">Twitter</Link>
        <Link to="https://instagram.com" target="_blank" className="hover:text-yellow-400">Instagram</Link>
      </div>
    </footer>
  );
};

export default Footer;
