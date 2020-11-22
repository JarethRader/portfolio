const Projects = () => import('../routes/Projects');
const About = () => import('../routes/About');

export const prefetchMap = [
  {
    path: '/home',
    prefetchComponents: [Projects],
  },
  {
    path: '/projects',
    prefetchComponents: [About],
  },
];
