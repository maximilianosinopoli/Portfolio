import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Maximiliano Sinopoli | JS Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "I'm",
  name: 'Maximiliano Sinopoli',
  subtitle: 'a <Front End Developer/>',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.jpg',
  paragraphOne: "I'm a computer science student and a Front End Developer specialised in Javascript technologies based in London, UK.",
  paragraphTwo: 'I stand out for being an extremely curious person, with a proactive personality and a passion for learning new and exciting things. I love challenges that require logic and critical thinking to overcome.',
  paragraphThree: "Recently I've done a programming bootcamp over 300 hours. I've learned technologies like React, NodeJS, Express, MongoDB, Mongoose, MySQL, Hooks, HTML and CSS. I like also travel, photography, reading, outdoor sports and learn new languages.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'recipe.png',
    title: 'Recipe App',
    info: 'The app grabs recipes from an external API and allows users to search for specific recipes.',
    info2: 'Technologies: Javascript, React, Hook, CSS',
    url: 'https://compassionate-bhabha-585153.netlify.app/',
    repo: 'https://github.com/maximilianosinopoli/Recipe-App', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's talk!",
  email: 'm_sinopoli@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/maxisinopoli-react/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/colosinopoli/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/maximilianosinopoli',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
