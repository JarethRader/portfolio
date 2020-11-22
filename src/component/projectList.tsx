import {
  ReactLogo,
  NodeDotJs,
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
} from '@styled-icons/simple-icons';
import { StyledIcon } from 'styled-icons/types';

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
    title: 'CryptoLib',
    imageURL:
      'https://d2q1q2xjiqiovj.cloudfront.net/portfolio/resources/CryptoLib.jpg',
    blurb:
      'Fullstack website to hosts public domain books on the Ethereum blockchain',
    description:
      'Cryptolib is a project I independently built in 2018. It hosts public domain books on the Ethereum blockchain. My vision was to offer books for checkout while preventing duplication of the same data. It’s a fullstack MERN site that utilizes an ethereum smart contract written in solidity along with a traditional backend, and is hosted on Heroku.',
    challenges: [
      "This was the first fullstack project I worked on. It was a challenge to think about deployment and maintaining it; Heroku provides a CI/CD pipeline without much setup, which was nice for someone who wasn't very familiar with that field yet.",
      'Another challenge was figuring out how to incorporate the web3 code into the flow of the whole application. This was the first project I had to continuously do research on best practices, different implementations, or do a lot of trial and error for until I found an optimal solution.',
    ],
    stack: [
      { icon: Html5, title: 'HTML' },
      { icon: Css3, title: 'CSS' },
      { icon: Javascript, title: 'Javascript' },
      { icon: Bootstrap, title: 'Bootstrap' },
      { icon: ReactLogo, title: 'ReactJS' },
      { icon: Redux, title: 'Redux' },
      { icon: NodeDotJs, title: 'NodeJS' },
      //solidity,
      //web3,
      { icon: Github, title: 'Github' },
      { icon: Heroku, title: 'Heroku' },
    ],
    githubLink: 'https://github.com/JarethRader/CryptoLib',
    liveLink: 'https://cryptolib.co/',
  },
  {
    id: 1,
    title: 'Playmayte',
    imageURL:
      'https://d2q1q2xjiqiovj.cloudfront.net/portfolio/resources/Playmayte.jpg',
    blurb: 'A dating site for gamers',
    description:
      'While quarantining due to COVID-19, I was inspired to create a dating website for video game and anime lovers in order to meet, connect and play their favorite games and watch their favorite animes together. It’s a fullstack MERN site, programmed primarily in typescript, uses the Tailwindcss framework, and is hosted on AWS.',
    challenges: [
      'I learned a lot of new technologies while building this site. I used MongoDB for this site, and in retrospect it was a mistake. MongoDB can be good for a project where you just need lists of data or objects, but a site like this really utilized relationships between the data I was storing, so a relation database like PostreSQL would have been a better choice.',
      'I choose to build my own React toolchain; create-react-app hides its dependencies and I was runnign into a lot of problems with accidentally double installing some of them. I was able to control my webpack config a lot better doing this, which I really liked.',
      'I deployed this website on AWS. It was really difficult to read through the AWS documention at first, since I had never used any of their services before. I had to take some time to learn about all the services as a beginnger before feeling comfortable to attempt to set my own enviroment for my project.',
    ],
    stack: [
      { icon: Html5, title: 'HTML' },
      { icon: Postcss, title: 'Postcss' },
      { icon: Typescript, title: 'Typescript' },
      { icon: Tailwindcss, title: 'Tailwindcss' },
      { icon: ReactLogo, title: 'React' },
      { icon: Webpack, title: 'Webpack' },
      { icon: Babel, title: 'Babel' },
      { icon: Redux, title: 'Redux' },
      { icon: NodeDotJs, title: 'NodeJS' },
      { icon: Github, title: 'Github' },
      { icon: Amazonaws, title: 'AWS' },
    ],
    githubLink: 'https://github.com/JarethRader/Playmayte',
    liveLink: 'https://playmayte.com/',
  },
  {
    id: 2,
    title: 'Stone Rader Boards',
    imageURL:
      'https://d2q1q2xjiqiovj.cloudfront.net/portfolio/resources/SRBoards.jpg',
    blurb: 'My friend and I make and sell longboards',
    description:
      'In highschool my friend and I got interested in making longboards. We spent time to figure out how to efficiently press our own boards, where to source materials, and how to do everything else in between. We have sold about 20 boards since we starting making them, and have recently been experimenting with building skateboards too.',
    challenges: [
      'We did a lot of trial and error before we found the best way to press boards. The most common problem we faced was having the boards come apart in some places, despite having an adequate amoutn of glue. We had to modify our press, and try to repress the bad boards several times until we managed to dial in the perfect setup.',
    ],
    githubLink: 'N/A',
    liveLink: 'N/A',
  },
  // {
  //   id: 3,
  //   title: 'Flip Chess',
  //   imageURL:
  //     'https://d2q1q2xjiqiovj.cloudfront.net/portfolio/resources/RadishChoiceView.jpg',
  //   blurb: "I'm an occasional freelance video editor",
  //   stack: ['react', 'node', 'actix-web', 'context-api', 'typescript', 'webpack', 'babel', 'html', 'postcss', 'tailwind', 'docker', 'github', 'githubactions', 'aws']
  //   description:
  //      "I built this webite for fun, and to learn more about building an app using a microserver based architecture. I'm not very good at chess, so I wanted to level the playing field by flipping the board around randomly thorughout a game. It was a really good learning experience, and I focused more on the devops and AWS side of things, like auto-scaling and setting up a CI/CD pipeline with github."
  //   challenges:
  //      "I learned rust for this project; I did research on how to best handle a lot of web socket connections, and rust seemed like a really good option. It took me a while, and it was slow at the beginning while I had to learn all the interesting stuff that rust brings to the table. But I'm glad I struggled through it, and can add rust to my list of skills. \
  //       there are a lot of chess related npm modules, but they all were not being maintained, or didn't support typescript, or didn't have a react wrapper. I ended up creating my own. There wasn't very indepth documentation, so it was a lot of lookign at source code and piecing things together until I managed to figure it out. \
  //       I learned a lot more about using AWS and docker to auto-scale the different microservers I had. I went through the effort to add testing to much of the application for the automated deployment whenever I updating my github repo",
  //   githubLink: 'https://github.com/JarethRader/FlipChess',
  // },
  // {
  //   id: 3,
  //   title: 'Video Editor',
  //   imageURL:
  //     'https://d2q1q2xjiqiovj.cloudfront.net/portfolio/resources/RadishChoiceView.jpg',
  //   videoURL: 'https://www.radishsystems.com/videos/newport_phonebot.mp4',
  //   blurb: "I'm an occasional freelance video editor",
  //   description:
  //     "Since 2017 I've been editing videos for Radish Systems, a telecommunications company based in Boulder, CO. I created an updated showcase video for their ChoiceView Phonebot that they presented at the 2019 Amazon Connect ",
  // },
];

export default projectList;
