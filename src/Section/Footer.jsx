import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Name + Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Rizwan Ali</h2>
            <p className="text-gray-400">Frontend Developer</p>
            <p className="text-gray-400 text-[15px]">rizwanali4574992@gmail.com</p>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4 text-4xl">
            <a
              href="https://www.linkedin.com/in/rizwan--ali"
              className="hover:text-blue-600 duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />{" "}
            </a>
            <a
              href="https://github.com/RizwanAli4574"
              className="hover:text-white duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://wa.me/923184300963?text=Hello%20Rizwan%20Ali"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 duration-300 flex items-center"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-6 text-center text-gray-500 text-sm border-t border-gray-700 pt-4 ">
          © 2025 Rizwan Ali — All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;


