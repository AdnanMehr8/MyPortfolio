import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS in Software Engineering"
            subTitle="Comsats University Islamabad(2020 - 2024)"
            result="2.85/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="F.sc"
            subTitle="Punjab College of Information and Technology (2017 - 2019)"
            result="706/1100"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Sideeq Public School (2015 - 2017)"
            result="872/1100"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

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
    </motion.div>
  );
}

export default Education