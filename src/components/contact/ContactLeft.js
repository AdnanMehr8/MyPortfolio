import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Adnan Haider</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I'm Adnan Haider, a passionate Full Stack Web Developer with a Bachelor's degree in Software Engineering from Comsats University Islamabad. Currently, I serve as a React Developer in Pakistan, where I thrive on the dynamic challenges of building innovative web solutions. My journey in software engineering has been marked by a relentless pursuit of excellence and a deep-seated love for crafting impactful websites.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+92 3338170525</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">adnanhaider4878@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
      </div>
    </div>
  );
}

export default ContactLeft