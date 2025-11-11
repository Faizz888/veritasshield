import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-blue-600 text-white shadow-lg p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Veritas Shield</div>
      <div className="space-x-4">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/subscription">Subscription</Link>
        <Link className="hover:underline" to="/login">Login</Link>
        <Link className="hover:underline" to="/register">Register</Link>
        <Link className="hover:underline" to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
