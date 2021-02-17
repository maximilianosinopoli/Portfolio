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
  paragraphOne: "I'm a computer science student and a Front End Developer specialised in Javascript technologies based in London, UK. I stand out for being an extremely curious person, with a proactive personality and a passion for learning new and exciting things. I love challenges that require logic and critical thinking to overcome.",
  paragraphTwo: "Recently I've done a programming bootcamp over 300 hours. I've learned technologies like React, NodeJS, Express, MongoDB, Mongoose, MySQL, Hooks, HTML and CSS. I like also travel, photography, reading, outdoor sports and learn new languages.",
  paragraphThree: "If you’d like to learn more about what makes me tick, feel free to send a message. Email: m_sinopoli@hotmail.com || Phone Number: +44 7593902107",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'todo.png',
    title: 'To Do List',
    info: 'The clasic "To Do List" built in Vanilla Javascript, allows the user to insert new tasks, delete each one, filter the research and delete all of them. The next version will include Local Storage as well.',
    info2: 'Technologies: Javascript, Materialize.',
    url: 'https://todo-list-vanilla-js.netlify.app/',
    repo: 'https://github.com/maximilianosinopoli/Todo-Vanilla', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wanderlust.png',
    title: 'Travel Agency',
    info: 'Responsive travel agency site develop with the Materialize CSS.',
    info2: 'Technologies: Javascript, Materialize.',
    url: 'https://travel-agency-site.netlify.app/',
    repo: 'https://github.com/maximilianosinopoli/Wanderlust', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'recipe.png',
    title: 'Recipe App',
    info: 'The app grabs recipes from an external API and allows users to search for specific recipes.',
    info2: 'Technologies: Javascript, React, Hooks, CSS',
    url: 'https://lets-eat-react.netlify.app/',
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
