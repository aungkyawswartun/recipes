import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 items-center">
      <div>
        <h1 className="text-2xl text-orange-400 font-bold">Recipicity</h1>
      </div>
      <ul className="flex space-x-10">
        <li>
          <Link to="/" className="hover:text-orange-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-400">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-400">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
