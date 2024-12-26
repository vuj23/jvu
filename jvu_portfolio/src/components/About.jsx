import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { meepmin } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me!</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-10 mt-8">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm currently a third year Computer Engineering student at McMaster University
          with a strong interest in embedded systems, electronics, and the integration 
          of hardware and software! Throughout my academic journey, I've been able to explore
          various aspects of engineering, from circuit design and sensor interfacing to microcontroller
          programming and system-level development. I'm passionate about problem solving, learning, and collaborating
          in team environments where ideas are created to develop innovative solutions. 
        </motion.p>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 1)}
          className="flex-shrink-0 w-full md:w-1/3"
        >
          <img
            src={meepmin}
            alt="Profile"
            className="rounded-lg object-cover shadow-lg w-full h-auto"
          />
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
