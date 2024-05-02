import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND LET ME KNOW YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Xtreme Moto Cross"
          des="The Extreme Motocross project is a 3D stunts bike game developed by Adnan Haider. The game offers players an immersive experience in the world of extreme sports, allowing them to engage in adrenaline-pumping races, perform gravity-defying stunts, and explore diverse maps. With a focus on realism, visual appeal, and multiplayer functionality, the project aims to provide a thrilling and visually striking gaming experience for a wide audience."
          src={projectOne}
          githubLink="https://github.com/AdnanMehr8"
          websiteLink="https://github.com/AdnanMehr8"
        />
        <ProjectsCard
          title="Chatbot-gemini-clone"
          des="The Gemini Clone Chatbot is a conversational agent developed using the Gemini API, HTML, CSS, and JavaScript. Designed to provide users with an interactive and engaging experience, this chatbot leverages the power of Gemini's capabilities to deliver intelligent responses and assistance."
          src={projectTwo}
          githubLink="https://github.com/AdnanMehr8/Chatbot-gemini-clone"
          websiteLink="https://github.com/AdnanMehr8/Chatbot-gemini-clone"
        />
        <ProjectsCard
          title="React-Movie"
          des="This project is a responsive React application that allows users to explore a vast collection of movies using an API. The users can also stream movies an series."
          src={projectThree}
          githubLink="https://github.com/AdnanMehr8/react-movie"
          websiteLink="https://motvies.netlify.app/"
        />
      </div>

    </section>
  );
}

export default Projects