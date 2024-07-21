import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/sarinnasung/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-pink-500 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/ssung01-pixel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-pink-500 transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com/sarinnasung/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-pink-500 transition duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
