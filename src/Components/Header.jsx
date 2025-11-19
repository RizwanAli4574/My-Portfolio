import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
     
        <h1 className="text-2xl font-bold text-indigo-600 ">Rizwan Ali </h1>

        
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-indigo-500">Home</a>
          <a href="#about" className="hover:text-indigo-500">About</a>
          <a href="#skills" className="hover:text-indigo-500">Skills</a>
          <a href="#projects" className="hover:text-indigo-500">Projects</a>
          <a href="#contact" className="hover:text-indigo-500">Contact</a>
        </nav>

       
        <div className="md:hidden">
          <button
            className="text-2xl font-bold"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : <FaBars />}
          </button>
        </div>
      </div>

      
      {open && (
        <nav className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}
