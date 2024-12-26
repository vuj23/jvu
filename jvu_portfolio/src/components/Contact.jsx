import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { mcmaster, github, linkedin} from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Contacts</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <p className='text-white font-medium mb-4'>
            <span className='text-secondary flex items-center'>
              <img
                src = {linkedin} // Replace with your LinkedIn logo path
                alt="LinkedIn logo"
                className="mr-2 w-5 h-5"
              />
              LinkedIn:
            </span> 
            <a href="https://www.linkedin.com/in/jackvu04/" target="_blank" rel="noopener noreferrer" className='text-white'>
              jackvu2004
            </a>
          </p>
          <p className='text-white font-medium mb-4'>
             <span className='text-secondary flex items-center'>
              <img
                src = {mcmaster} // Replace with your LinkedIn logo path
                alt="LinkedIn logo"
                className="mr-2 w-5 h-5"
              />
              Email Address:
            </span> 
            <a href="mailto:vuj23@mcmaster.ca" className='text-white'>
              vuj23@mcmaster.ca
            </a>
          </p>
          <p className='text-white font-medium mb-4'>
             <span className='text-secondary flex items-center'>
              <img
                src = {github} // Replace with your LinkedIn logo path
                alt="LinkedIn logo"
                className="mr-2 w-5 h-5"
              />
              Github:
            </span> 
            <a href="https://github.com/vuj23" target="_blank" rel="noopener noreferrer" className='text-white'>
              My Github Profile!
            </a>
          </p>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
