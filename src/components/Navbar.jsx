import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import DarkModeToggle from './DarkModeToggle.jsx'; // Import DarkModeToggle

const navItems = ["Home", "How It Works", "Why Choose Us", "Testimonials", "Contact"];

const NavBar = ({ darkMode, setDarkMode }) => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
      <div
          ref={navContainerRef}
          className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex items-center justify-between h-16 px-4 relative bg-transparent">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img
                  src="/public/img/logo.png"
                  alt="logo"
                  className="h-10 md:h-12 object-contain max-h-full"
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex h-full items-center gap-6">
              {navItems.map((item, index) => (
                  <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="nav-hover-btn"
                  >
                    {item}
                  </a>
              ))}
              {/* Dark Mode Toggle */}
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white focus:outline-none text-3xl"
              >
                {isMobileMenuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>

            {/* Mobile Nav Items */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 right-4 bg-black bg-opacity-60 backdrop-blur-sm rounded-md shadow-md py-4 px-6 z-50 flex flex-col items-start gap-4 md:hidden">
                  {navItems.map((item, index) => (
                      <a
                          key={index}
                          href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="relative text-xs uppercase text-blue-50 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer"
                          onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                  ))}
                </div>
            )}
          </nav>
        </header>
      </div>
  );
};

export default NavBar;
