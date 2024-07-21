import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400 transition duration-300">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400 transition duration-300">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400 transition duration-300">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
