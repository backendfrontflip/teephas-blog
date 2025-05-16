import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Requires `lucide-react` or use any icon set
import SearchBar from './SearchBar';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow px-4 py-3">
      {/* Top bar */}
      <div className="flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          Teephas Blog
        </Link>

        {/* Search bar - always centered */}
      <div className="my-4 flex justify-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      

      {/* Mobile nav menu */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4 mt-2 md:hidden">
          <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
