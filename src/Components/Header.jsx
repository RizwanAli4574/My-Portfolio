import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { ImCross } from "react-icons/im";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" fixed w-full bg-black shadow-md z-50">
      <div className="max-w-8xl mx-auto flex justify-between items-center p-4">
        <a href="#home"><h1 className="text-2xl font-bold  flex items-center gap-2 text-white cursor-pointer hover:text-indigo-400">
          Rizwan Ali{" "}
          <span className="text-2xl">
            <BsCodeSlash />
          </span>
        </h1>
        </a>

  <nav className="hidden md:flex space-x-5 text-white sticky adjust2">

  <a
    href="#home"
    className="relative inline-block
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:w-0 after:h-[2px] after:bg-indigo-600
    after:transition-all after:duration-300
    hover:after:w-full"
  >
    Home
  </a>

  <a
    href="#about"
    className="relative inline-block
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:w-0 after:h-[2px] after:bg-indigo-600
    after:transition-all after:duration-300
    hover:after:w-full"
  >
    About
  </a>

  <a
    href="#skills"
    className="relative inline-block
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:w-0 after:h-[2px] after:bg-indigo-600
    after:transition-all after:duration-300
    hover:after:w-full"
  >
    Skills
  </a>

  <a
    href="#projects"
    className="relative inline-block
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:w-0 after:h-[2px] after:bg-indigo-600
    after:transition-all after:duration-300
    hover:after:w-full"
  >
    Projects
  </a>

  <a
    href="#contact"
    className="relative inline-block
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:w-0 after:h-[2px] after:bg-indigo-600
    after:transition-all after:duration-300
    hover:after:w-full"
  >
    Contact
  </a>

</nav>


        <div className="md:hidden">
          <button
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <ImCross /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-black shadow-md flex flex-col items-center space-y-4 py-4 text-white ">
          <a href="#home" className="hover:text-indigo-400" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#about" className="hover:text-indigo-400" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#skills" className="hover:text-indigo-400" onClick={() => setOpen(false)}>
            Skills
          </a>
          <a href="#projects" className="hover:text-indigo-400" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#contact" className="hover:text-indigo-400" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
