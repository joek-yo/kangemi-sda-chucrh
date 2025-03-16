// 📌 File: src/components/Footer.tsx

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-6 text-center">
      <p className="text-lg font-semibold">Seventh-day Adventist Church, Kangemi</p>
      <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>

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
