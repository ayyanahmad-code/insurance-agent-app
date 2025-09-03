import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export function SimpleFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Side - Brand */}
        <Typography color="white" className="text-lg font-semibold">
          © {new Date().getFullYear()} Websites Development ayyan 🚀
        </Typography>

        {/* Middle - Navigation */}
        <ul className="flex items-center gap-x-6 mt-4 md:mt-0">
          <li>
            <Typography
              as={Link}
              to="/contact"
              color="white"
              className="font-normal transition-colors hover:text-blue-400"
            >
              Contact
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="/"
              color="white"
              className="font-normal transition-colors hover:text-blue-400"
            >
              Home
            </Typography>
          </li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="text-2xl hover:text-sky-400 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
