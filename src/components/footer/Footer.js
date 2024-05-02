import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black flex flex-col items-center">
      <img className="w-32 rounded-full mb-8" src={logo} alt="logo" />
      <div className="flex gap-4">
        <span className="bannerIcon">
          <a href="https://www.facebook.com/profile.php?id=100015183348864">
            <FaFacebookF />
          </a>
        </span>
        <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/adnanhaider21421525/?profileId=ACoAADGqUvsBgOE9vZDp25mtgGaUoHUwPgnsCu4">
            <FaLinkedinIn />
          </a>
        </span>
        <span className="bannerIcon">
          <a href="https://www.instagram.com/mehr7619?igsh=OGczczByYmV4a2tw">
            <FaInstagram />
          </a>
        </span>
        <span className="bannerIcon">
          <a href="https://github.com/AdnanMehr8">
            <FaGithub />
          </a>
        </span>
        <span className="bannerIcon">
          <a href="mailto:adnanhaider4878@gmail.com">
            <FaEnvelope />
          </a>
        </span>
      </div>
      <button onClick={scrollToTop} className="bg-gray-800 text-white py-2 px-4 mt-8 rounded hover:bg-gray-600">
        Back to Top
      </button>
    </div>
  );
}

export default Footer;
