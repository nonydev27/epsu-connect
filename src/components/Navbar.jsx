import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">EPSU-KNUST</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <Link to="/about" className="hover:text-amber-400">About</Link>
          <Link to="/leaders" className="hover:text-amber-400">Leaders</Link>
          <Link to="/birthdays" className="hover:text-amber-400">Birthdays</Link>
          <Link to="/contact" className="hover:text-amber-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}