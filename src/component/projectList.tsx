import {
  ReactLogo,
  Nodedotjs,
  Html5,
  Css3,
  Javascript,
  Bootstrap,
  Redux,
  Github,
  Heroku,
  Typescript,
  Postcss,
  Webpack,
  Babel,
  Amazonaws,
  Tailwindcss,
  Docker,
  Solidity,
  Web3dotjs,
} from "@styled-icons/simple-icons";
import { StyledIcon } from "styled-icons/types";

interface IStackItem {
  icon: StyledIcon;
  title: string;
}

export interface IProjectList {
  id: number;
  title: string;
  imageURL: string;
  blurb: string;
  description: string;
  challenges: Array<string>;
  stack?: Array<IStackItem>;
  githubLink: string;
  liveLink?: string;
}
[];

const projectList = [
  {
    id: 0,
    title: "CryptoLib",
    imageURL: "https://d2q1q2xjiqiovj.cloudfront.net/portfolio/resources/CryptoLib.jpg",
    blurb: "Fullstack website to hosts public domain books on the Ethereum blockchain.",
    description:
      "Cryptolib is a project I independently built in 2018. It hosts public domain books on the Ethereum blockchain. My vision was to offer books for checkout while preventing duplication of the same data. It’s a fullstack MERN site that utilizes an ethereum smart contract written in solidity along with a traditional backend, and is hosted on Heroku.",
    challenges: [
      "This was the first fullstack project I worked on. It was a challenge to think about deployment and maintaining it; Heroku provides a CI/CD pipeline without much setup, which was nice for someone who wasn't very familiar with that field yet.",
      "Another challenge was figuring out how to incorporate the web3 code into the flow of the whole application. This was the first project I had to continuously do research on best practices, different implementations, or do a lot of trial and error for until I found an optimal solution.",
    ],
    stack: [
      { icon: Html5, title: "HTML" },
      { icon: Css3, title: "CSS" },
      { icon: Javascript, title: "Javascript" },
      { icon: Bootstrap, title: "Bootstrap" },
      { icon: ReactLogo, title: "ReactJS" },
      { icon: Redux, title: "Redux" },
      { icon: Nodedotjs, title: "NodeJS" },
      { icon: Solidity, title: "Solidity" },
      { icon: Web3dotjs, title: "Web3" },
      { icon: Github, title: "Github" },
      { icon: Heroku, title: "Heroku" },
    ],
    githubLink: "https://github.com/JarethRader/CryptoLib",
    liveLink: "N/A",
    // liveLink: "https://cryptolib.co/",
  },
  {
    id: 1,
    title: "Playmayte",
    imageURL: "https://d2q1q2xjiqiovj.cloudfront.net/portfolio/resources/Playmayte.jpg",
    blurb: "A dating site for gamers.",
    description:
      "While quarantining due to COVID-19, I was inspired to create a dating website for video game and anime lovers in order to meet, connect and play their favorite games and watch their favorite animes together. It’s a fullstack MERN site, programmed primarily in typescript, uses the Tailwindcss framework, and is hosted on AWS.",
    challenges: [
      "I learned a lot of new technologies while building this site. I used MongoDB for this site, and in retrospect it was a mistake. MongoDB can be good for a project where you just need lists of data or objects, but a site like this really utilized relationships between the data I was storing, so a relational database like PostreSQL would have been a better choice.",
      "I chose to build my own React toolchain; create-react-app hides its dependencies and I was running into a lot of problems with accidentally double installing some of them. I was able to control my webpack config a lot better doing this, which I really liked.",
      "I deployed this website on AWS. It was really difficult to read through the AWS documentation at first, since I had never used any of their services before. I had to take some time to learn about all the services as a beginner before feeling comfortable to attempt to set my own environment for my project.",
    ],
    stack: [
      { icon: Html5, title: "HTML" },
      { icon: Postcss, title: "Postcss" },
      { icon: Typescript, title: "Typescript" },
      { icon: Tailwindcss, title: "Tailwindcss" },
      { icon: ReactLogo, title: "React" },
      { icon: Webpack, title: "Webpack" },
      { icon: Babel, title: "Babel" },
      { icon: Redux, title: "Redux" },
      { icon: Nodedotjs, title: "NodeJS" },
      { icon: Github, title: "Github" },
      { icon: Amazonaws, title: "AWS" },
    ],
    githubLink: "https://github.com/JarethRader/Playmayte",
    liveLink: "N/A",
    // liveLink: "https://playmayte.com/",
  },
  {
    id: 2,
    title: "LearnUp Centers",
    imageURL:
      "https://uploads-ssl.webflow.com/5d6ecc49839d60e3c55718f4/5d6ecc49839d60ca74571967_learn%2520up%2520logo%2520web-01-p-500.jpeg",
    blurb: "Website to help LearnUp migrate to online learning.",
    description:
      "Improved the experience of students learning at home by translating their existing letter board using in traditional classrooms to an effective online experience.",
    challenges: [
      "The tiles on the letterboard on the website required draggable behavior which required a lot of calculating the coordinates of tiles.",
      "The letterboard requires both student and teacher interactions simutaneously, so I implemented WebRTC to send events between sessions to allow for this collaboration feature.",
    ],
    stack: [
      { icon: Html5, title: "HTML" },
      { icon: Postcss, title: "Postcss" },
      { icon: Typescript, title: "Typescript" },
      { icon: Tailwindcss, title: "Tailwindcss" },
      { icon: ReactLogo, title: "React" },
      { icon: Webpack, title: "Webpack" },
      { icon: Babel, title: "Babel" },
      { icon: Redux, title: "Redux" },
      { icon: Nodedotjs, title: "NodeJS" },
      { icon: Github, title: "Github" },
      { icon: Docker, title: "Docker" },
    ],
    githubLink: "https://github.com/JarethRader/LearnUp",
    liveLink: "N/A",
  }
];

export default projectList;
