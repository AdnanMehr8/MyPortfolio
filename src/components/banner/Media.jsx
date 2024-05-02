import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaGithub, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiHtml5, SiCss3, SiSass, SiJavascript, SiUnity, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex flex-wrap gap-4">
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex flex-wrap gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
          <span className="bannerIcon">
            <SiHtml5 />
          </span>
          <span className="bannerIcon">
            <SiCss3 />
          </span>
          <span className="bannerIcon">
            <SiSass />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <SiUnity />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
          <span className="bannerIcon">
            <SiExpress />
          </span>
        </div>

      </div>
    </div>
  )
}

export default Media