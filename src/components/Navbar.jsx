import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Bhargava from "../assets/Bhargava.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-md py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* LEFT - Logo + Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
          >
            {/* Logo */}
            <div className="w-20 h-15 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src={Bhargava}
                alt="Director - Bhaskar Coaching Classes"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="leading-tight">
              <span
                className={`block text-lg md:text-xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Bhaskar Coaching
              </span>
              <span
                className={`block text-xs tracking-wide ${
                  scrolled ? "text-slate-500" : "text-white/80"
                }`}
              >
                Classes
              </span>
            </div>
          </a>

          {/* RIGHT - Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {["Home", "About", "Courses", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative font-medium transition duration-300 ${
                  scrolled ? "text-slate-700" : "text-white"
                } hover:text-blue-600 group`}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <a
              href="#contact"
              className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
            >
              Enroll Now
            </a>

          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? "text-black" : "text-white"}`}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 bg-white shadow-md" : "max-h-0"
          }`}
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            {["Home", "About", "Courses", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-700 font-medium hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-2 px-5 py-2 bg-blue-600 text-white rounded-xl text-center"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </nav>

      {/* STICKY CTA BUTTON */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-xl hover:bg-blue-700 hover:scale-110 transition duration-300 z-50"
      >
        Enroll Now
      </a>
    </>
  );
}

export default Navbar;