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
    afiniti,
    iplex,
    tarisoft,
    codealpha,
    dashboard,
    snapshot,
    real,
    port
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "React.js Developer",
      company_name: "Afiniti",
      icon: afiniti,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Jun 2022",
      points: [
        "Creating and upkeeping web applications with React.js and allied technologies.",
        "Cooperating with cross-functional teams, comprising designers, product managers, and fellow developers, to craft premium products.",
        "Deploying responsive design practices and ensuring compatibility across different web browsers.",
        "Engaging in code reviews and offering constructive feedback to support the growth of fellow developers."
      ],
    },
    {
      title: "React Native Developer",
      company_name: "IPlex.",
      icon: iplex,
      iconBg: "black",
      date: "Aug 2022 - Dec 2022",
      points: [
        "Creating and sustaining web applications with a focus on React.js and associated technologies.",
        "Collaborating seamlessly with cross-functional teams, including designers, product managers, and fellow developers, to deliver top-notch products.",
        "Executing responsive design practices and ensuring compatibility across various browsers.",
        "Engaging in code reviews and offering constructive feedback to support the continuous improvement of fellow developers."
      ],
    },
    {
      title: "Web Developer",
      company_name: "Code Alpha",
      icon: codealpha,
      iconBg: "white",
      date: "Jan 2023 - Jun 2023",
      points: [
        "Building and managing web applications through the utilization of React.js and associated technologies.",
        "Working collaboratively with cross-functional teams, encompassing designers, product managers, and fellow developers, to craft premium-quality products.",
        "Executing responsive design principles and ensuring compatibility across different web browsers.",
        "Engaging in code reviews and furnishing valuable feedback to enhance the development skills of team members."
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Tari soft Pvt.Ltd",
      icon: tarisoft,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "Crafting and sustaining web applications through the utilization of React.js and associated technologies.",
        "Fostering collaboration within cross-functional teams, including designers, product managers, and fellow developers, to produce top-tier products.",
        "Executing responsive design principles and ensuring compatibility across various web browsers.",
        "Contributing to code reviews and offering constructive feedback to fellow developers, fostering continuous improvement."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Outstanding work! Wasif seamlessly blended creativity with functionality, making our website as dynamic as our services.",
      name: "Andrea Intriago",
      designation: "COO",
      company: "Dynamic Solutions Group",
      image: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
    },
    {
      testimonial:
        "I haven't encountered a web developer as dedicated to their clients' success as Wasif is.",
      name: "Yong Dydell",
      designation: "CTO",
      company: "TechInnovate Labs",
      image: "https://xsgames.co/randomusers/assets/avatars/male/25.jpg",
    },
    {
      testimonial:
        "Wasif not only met but surpassed our expectations in bringing a touch of sophistication to our online platform",
      name: "Eliza Cragg",
      designation: "Founder",
      company: "Quantum Solutions Co.",
      image: "https://xsgames.co/randomusers/assets/avatars/female/69.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Porfolio",
      description:
        "Collaborate on the development of an engaging 3D website that incorporates interactive elements such as a floating island and a dynamically responsive fox. This project will serve as a sophisticated portfolio, showcasing your skills and providing a compelling presentation for potential employment opportunities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "emailjs",
          color: "orange-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/SPEEDYEEEEE/SPEEDY-Portfolio",
    },
    {
      name: "Snap-Shot",
      description:
        "A modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, TypeScript, and more.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "typscript",
          color: "pink-text-gradient",
        },
        {
          name: "react-query",
          color: "orange-text-gradient",
        },
      ],
      image: snapshot,
      source_code_link: "https://github.com/SPEEDYEEEEE/Snap-Shot",
    },
    {
      name: "Real-Estate Application",
      description:
        "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "redux",
          color: "orange-text-gradient",
        },
      ],
      image: real,
      source_code_link: "https://github.com/SPEEDYEEEEE/Real-Estate",
    },
    {
      name: "React-Admin-DashBoard",
      description:
            "Front-end implementation of an administrative dashboard application featuring theming options, tables, charts, a calendar, kanban functionality, and other essential components",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/SPEEDYEEEEE/Real-Estate",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };