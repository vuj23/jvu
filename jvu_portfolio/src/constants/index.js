import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  
  dare,
  br,
  opg,
  mcmaster,
  pocketjpg,
  sumbobots,
  scanner,
  snake,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "resume",
    title: "Resume",
    url: "https://drive.google.com/file/d/1qIxzGnMp4CdLcgOIDCD4oVaCruFi21qp/view?usp=sharing",
  },
  {
    id: "contact",
    title: "Contacts",
  },
];

const services = [
  {
    title: "PCB Design and Circuitry Development",
    icon: web,
  },
  {
    title: "Embedded System",
    icon: mobile,
  },
  {
    title: "Hardware and Firmware Integration",
    icon: backend,
  },
  {
    title: "Product Protyping and Testing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [

  {
    title: "Associate",
    company_name: "Banana Republic",
    icon: br,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Feb 2024",
    points: [
      "Operated sales register and communicated with guests to provide the best customer service in busy environments",
      "Worked in the stockroom to manage sales and organize inventory, leading to increased store efficiency",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "McMaster Advanced Control Consortium",
    icon: mcmaster,
    iconBg: "#383E56",
    date: "May - August 2023",
    points: [
      "Developed a custom simulator for a fourth-year process control class (50+ students) using Python, leveraging process dynamics knowledge to enhance learning outcomes",
      "Conducted research on control systems and PID controllers to optimize mass and temperature balance tuning, creating a user-tunable simulator with real-time data output capabilities",
    ],
  },
  {
    title: "Electrical Engineering Student",
    company_name: "Pocket Clinic Inc.",
    icon: pocketjpg,
    iconBg: "#E6DEDD",
    date: "December - March 2024 | June - August 2024",
    points: [
      "Developed key components for a smart injector system using STM32 and Arduino programming, enhancing drug delivery functionality through advanced electronic design",
      "Prototyped precise measurements systems utilizing worm gears, Hall effect sensors, and magnetometers, to capture and transform sensor data into accurate measurements",
      "Enhanced quality assurance and testing protocols with the R&D team, ensuring industry-standard compliance",
    ],
  },
 {
    title: "PEY Intern",
    company_name: "Ontario Power Generation",
    icon: opg,
    iconBg: "#E6DEDD",
    date: "Starting May 2025",
    points: [
      "Incoming PEY Intern!"
    ],
  },
];

const testimonials = [
  {
    testimonial: [
      "COMPENG3DQ5 | Digital Systems Design \n", 
      "ELECENG3EJ4 | Elec Devices & Circuits II ",
      "SFWRENG3K04 | Software Development \n",
      "ELECENG3TP3 | Signals & Systems \n",
      "ELECENG3TQ3 | Advanced Prob & Processes \n",
      "COMPENG2DX4 | Microprocessor Systems \n",
      "COMPENG2SH4 | Principles of Programming \n",
      "COMPENG2SI3 | Data Structures & Algorithms \n",
      "ELECENG2EI4 | Elec Devices & Circuits I ",
      "ELECENG2CF3 | Circuits & Waves \n",
      "COMPENG2DI4 | Logic Design \n", 
    ],
    name: "McMaster University",
    image: mcmaster,
  },

];

const projects = [
  {
    name: "SnapWaste",
    description:
      "Developed a website that utilizes AI to identify appropriate dispotal locations and methods for different types of waste. The project aimed to create an intuitive and accessible tool to assist individuals in making informed and eco-friendly waste dispotal decisions.",
    tags: [
      {
        name: "Nose.js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/vuj23/snapwaste",
  },
  {
    name: "Image Decompressor",
    description:
      "Designed and implemented a hardware-based image decompression system in SystemVerilog on the Altera DE2-115 FPGA, adhering to JPEG-based McMaster compression specifications. Developed key components including YUV-RGB conversion, inverse discrete cosine transforms, lossless decoding, UART, and VGA drivers, ensuring high-resolution outputs and optimized FPGA resource utilization",
    tags: [
      {
        name: "SystemVerilog",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
      {
        name: "Tcl",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "McMaster DARE",
    description:
      "As a member of the electrical subteam, I contribute to the design and development of different electrical components for our Beluga project. I am responsible for developing LED driver circuits, RP2040 control, and battery management",
    tags: [
      {
        name: "KiCAD",
        color: "blue-text-gradient",
      },
      {
        name: "Research",
        color: "green-text-gradient",
      },
      /*
      {
        name: "",
        color: "pink-text-gradient",
      },
      */
    ],
    image: dare,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sumobots",
    description:
      "Collaboratively programmed a competitive sumobot with advanced algorithms for autonomous actions, achieving superior performance in pushing opponents out of the ring.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino",
        color: "green-text-gradient",
      },
      {
        name: "Circuitry",
        color: "pink-text-gradient",
      },
    ],
    image: sumbobots,
    source_code_link: "https://github.com/",
  },
  {
    name: "Embedded Spatial Measurement System",
    description:
      "Engineered an embedded system with time-of-flight sensors and a rotary mechanism to precisely map spatial information, enhancing measurement accuracy across defined geometric planes. Developed an algorithm for data reconstruction and graphical presentation collected from the microcontroller, enabling intuitive visualization of spatial information for end-users",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "MicroControllers",
        color: "pink-text-gradient",
      },
    ],
    image: scanner,
    source_code_link: "https://github.com/",
  },
  {
    name: "Snake Game",
    description:
      "Developed a dynamic snake game in C++ using object-oriented principles (inheritance, encapsulation, polymorphism), showcasing advanced coding skills. Optimized performance and user experience through efficient memory allocation and code optimization, in turn decreasing resource consumption to guarantee smooth gameplay.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      /*
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
      */
    ],
    image: snake,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
