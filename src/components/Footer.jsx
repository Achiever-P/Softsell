import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
      <footer className="w-screen bg-[#0459e4] py-4 text-black">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:flex-row">
          <p className="text-center text-sm font-light md:text-center">
            ©Nova 2025. All rights reserved
          </p>

          <div className="flex justify-center gap-4 md:justify-center">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors duration-500 ease-in-out hover:text-white text-2xl"
                >
                  {link.icon}
                </a>
            ))}
          </div>

          <a
              href="#privacy-policy"
              className="text-center text-sm font-light hover:underline md:text-center"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
  );
};

export default Footer;
