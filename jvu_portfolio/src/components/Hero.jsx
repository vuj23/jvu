import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const letterAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{' '}
            <motion.span
              className="text-[#915EFF]"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                    repeat: Infinity, // Infinite loop
                    repeatType: 'loop', // Loop type
                  },
                },
              }}
            >
              {'Jack'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  transition={{
                    duration: 2, // Duration of each letter animation
                    repeat: Infinity, // Infinite loop
                    repeatType: 'reverse', // Reverse the animation
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm currently a <span style={{ fontWeight: 'bold', color: '#00A86B' }}>Computer Engineering</span> student at <br className='sm:block hidden' />
              <span style={{ fontWeight: 'bold', color: '#7A003C' }}>McMaster University</span> with an interest in all things electronics!
            </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
