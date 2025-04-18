import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOsopen] = useState(false);

  const menuOpen = () => {
    setOsopen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Ashish
      </a>

      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>

        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>

        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>

        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ul className="hidden md:flex gap-10">
        <a
          href="https://linkedin.com/in/ashish-choubey-62440a233"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <BsLinkedin />
          </li>
        </a>

        <a href="https://x.com/Ashish20484278?t=dYI_Ylra7qYQTQGJBIVN-A&s=09" 
        target="_blank"           
        rel="noopener noreferrer"
        >
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
          <BsTwitter />
        </li>
        </a>

        <a href="https://github.com/ashish-12-12" 
        target="_blank"           
        rel="noopener noreferrer"
        >
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <BsGithub />
        </li>
        </a>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>

            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>

            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projetcs</li>
            </a>

            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5">

            <a 
              href="https://linkedin.com/in/ashish-choubey-62440a233"
              target="_blank"
              rel="noopener noreferrer"
            >
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <BsLinkedin />
            </li> 
            </a>

            <a 
              href="https://x.com/Ashish20484278?t=dYI_Ylra7qYQTQGJBIVN-A&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
              <BsTwitter />
            </li>
            </a>

            <a 
              href="https://github.com/ashish-12-12"
              target="_blank"
              rel="noopener noreferrer"
            >
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
              <BsGithub />
            </li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
