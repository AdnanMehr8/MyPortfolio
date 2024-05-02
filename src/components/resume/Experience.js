import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="Self-Employed - (2021 - Present)"
            des="I work for myself as a web developer. I've made some complex websites by myself which helped me gain a lot of knowledge. Being my own boss lets me try out new things and learn as I go. I've learned a lot about making websites look good and work well for people. Working on my own has taught me how to manage my time. I've gotten pretty good at juggling different projects and making sure they're done on time."
          />
          <ResumeCard
            title="Mern Stack Developer"
            subTitle="Self-Employed - (2023 - present)"
            des="I became a Mern Stack Developer after obtaining skills in ReactJS NodeJS ExpressJS MongDB via project based learning "
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Self-Employed - (2022 - present)"
            des="I gained a lot of expertise in front-end in web-application by creating complex and responsive websites."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - present</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Dar Gym (2024 - present)"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Tutor"
            subTitle="Home (2020 - 2022)"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
