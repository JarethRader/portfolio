export interface IProjectList {
  id: number;
  title: string;
  imageURL: string;
  blurb: string;
  description: string;
  githubLink: string;
}
[];

const projectList = [
  {
    id: 0,
    title: 'CryptoLib',
    imageURL:
      'https://s3-us-west-1.amazonaws.com/www.jarethrader.com/resources/CryptoLib.jpg',
    blurb:
      'Fullstack website to hosts public domain books on the Ethereum blockchain',
    description:
      'Cryptolib is a project I independently built in 2018. It hosts public domain books on the Ethereum blockchain. My vision was to offer books for checkout while preventing duplication of the same data. It’s a fullstack MERN site that utilizes an ethereum smart contract written in solidity along with a traditional backend, and is hosted on Heroku.',
    githubLink: 'https://github.com/JarethRader/CryptoLib',
  },
  {
    id: 1,
    title: 'Playmayte',
    imageURL:
      'https://s3-us-west-1.amazonaws.com/www.jarethrader.com/resources/Playmayte.jpg',
    blurb: 'A dating site for gamers',
    description:
      'While quarantining due to COVID-19, I was inspired to create a dating website for video game and anime lovers in order to meet, connect and play their favorite games and watch their favorite animes together. It’s a fullstack MERN site, programmed primarily in typescript, uses the Tailwindcss framework, and is hosted on AWS.',
    githubLink: 'https://github.com/JarethRader/Playmayte',
  },
  {
    id: 2,
    title: 'Stone Rader Boards',
    imageURL:
      'https://s3-us-west-1.amazonaws.com/www.jarethrader.com/resources/SRBoards.jpg',
    blurb: 'My friend and I make and sell longboards',
    description:
      'In highschool my friend and I got interested in making longboards. We spent time to figure out how to efficiently press our own boards, where to source materials, and how to do everything else in between. We have sold about 20 boards since we starting making them, and have recently been experimenting with building skateboards too.',
    githubLink: 'N/A',
  },
  // {
  //   id: '3',
  //   title: 'Video Editor'
  //   imageURL: '',
  //   blurb: "I'm an occasional freelance video editor",
  //   description: 'Since 2017 I've been editing videos for Radish Systems, a telecommunications company based in Boulder, CO. I created an updated showcase video for their ChoiceView Phonebot that they presented at the 2019 Amazon Connect ',
  //   githubLink: 'https://www.radishsystems.com/videos/newport_phonebot.mp4'
  // }
];

export default projectList;
