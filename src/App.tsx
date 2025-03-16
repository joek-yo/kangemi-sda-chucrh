// 📌 File: src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<h1 className="text-center text-3xl">Welcome to SDA Kangemi</h1>} />
            <Route path="/about" element={<h1 className="text-center text-3xl">About Us</h1>} />
            <Route path="/ministries" element={<h1 className="text-center text-3xl">Ministries</h1>} />
            <Route path="/sermons" element={<h1 className="text-center text-3xl">Sermons</h1>} />
            <Route path="/events" element={<h1 className="text-center text-3xl">Events</h1>} />
            <Route path="/contact" element={<h1 className="text-center text-3xl">Contact Us</h1>} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
