import React from 'react';

import {
  ArrowIosForwardOutline,
  ArrowIosBackOutline,
  CloseOutline,
} from '@styled-icons/evaicons-outline';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSpring, animated, config } from 'react-spring';
import useMeasure from 'react-use-measure';

import projectList, { IProjectList } from '../component/projectList';

interface Props {}

const Projects = (props: Props) => {
  // Project Carousel
  const [projectIndex, setProjectIndex] = React.useState(0);
  React.useEffect(() => {
    setProject(projectList[projectIndex]);
  }, [projectIndex]);
  const [project, setProject] = React.useState<IProjectList>(
    projectList[projectIndex]
  );
  const handleIndexForward = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (projectList.length === projectIndex + 1) setProjectIndex(0);
    else setProjectIndex(projectIndex + 1);
  };
  const handleIndexBackward = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (projectIndex === 0) setProjectIndex(projectList.length - 1);
    else setProjectIndex(projectIndex - 1);
  };

  const [ref, bounds] = useMeasure({});
  const calc = (x: any, y: any) => {
    return [
      -(y - (bounds.bottom - bounds.top) / 2) / 20,
      (x - (bounds.right - bounds.left) / 2) / 20,
      1.1,
    ];
  };
  const trans: any = (x: any, y: any, s: any) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  // Project Modal
  const [showModal, setShowModal] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    // console.log(showModal);
    const timer = setTimeout(() => {
      setShowModal(!showModal);
    }, 2000);
    return () => clearTimeout(timer);
  }, [open]);
  const toggleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    // console.log('Open Toggled');
    event.preventDefault();
    setOpen(!open);
  };

  // @ts-ignore
  const { rotateZ, ...rest } = useSpring({
    config: config.gentle,
    from: {
      rotateZ: 0,
      rotateX: 0,
      opacity: '0%',
      width: '100%',
      height: '100%',
    },
    to: {
      rotateZ: open ? 25 : 0,
      opacity: open ? '0%' : '100%',
      rotateX: open ? 180 : 0,
      width: open ? '10%' : '100%',
      height: open ? '10%' : '100%',
    },
  });

  return (
    <div>
      {open ? null : (
        <div>
          <CSSTransition in={open} timeout={300} classNames='fade'>
            <div className='min-h-screen w-screen absolute bg-gray-800 opacity-75 transform md:-rotate-25 scale-150 z-30'></div>
          </CSSTransition>
        </div>
      )}
      <animated.div
        className='absolute w-full min-h-screen'
        style={{
          ...rest,
          transform: rotateZ.interpolate((z: number) => `rotate(${z}deg)`),
          zIndex: open ? -10 : 40,
        }}>
        <div className='min-h-screen w-full flex justify-center items-center absolute transform md:-rotate-25 md:-translate-y-24 -translate-y-20'>
          <ProjectModal
            toggleOpen={toggleOpen}
            title={project.title}
            imageURL={project.imageURL}
            blurb={project.blurb}
            description={project.description}
            githubLink={project.githubLink}
          />
        </div>
      </animated.div>
      <div
        className='overflow-auto md:overflow-hidden scroll mb-10 md:grid md:grid-cols-2'
        style={{ height: '80vh' }}>
        <div className='transform md:-rotate-25 md:mx-20 flex justify-start items-center'>
          <div className='text-center orbitron-font md:w-3/4'>
            <div className='text-6xl px-4 stroke'>Projects</div>
            <hr className='shadow-xl pb-2' />
            <div className='text-right text-white text-xl'>
              <p className='md:px-0 px-4'>
                Here are some interesting projects I've worked on
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-baseline pt-20 flex-row  md:w-3/5 static w-full'>
          <div>
            <button
              className='text-white flex self-baseline transform  cursor-pointer hover:scale-125 focus:outline-none'
              onClick={(e) => handleIndexBackward(e)}>
              <ArrowIosBackOutline size='64' />
            </button>
          </div>
          <animated.div
            ref={ref}
            className='w-full flex justify-center'
            onMouseMove={({ clientX: x, clientY: y }) => {
              set({
                xys: calc(
                  Math.round(x - bounds.left),
                  Math.round(y - bounds.top)
                ),
              });
            }}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              transform: springProps.xys.interpolate(trans),
            }}>
            <TransitionGroup className='relative w-3/4 flex items-start h-64'>
              <CSSTransition
                key={project.id}
                timeout={300}
                classNames='slide'
                unmountOnExit>
                <ProjectCard
                  toggleOpen={toggleOpen}
                  title={project.title}
                  imageURL={project.imageURL}
                  videoURL={
                    project.videoURL !== undefined
                      ? project.videoURL
                      : undefined
                  }
                  blurb={project.blurb}
                  description={project.description}
                  githubLink={project.githubLink}
                />
              </CSSTransition>
            </TransitionGroup>
          </animated.div>
          <div>
            <button
              className='text-white flex self-baseline  cursor-pointer transform hover:scale-125 focus:outline-none'
              onClick={(e) => handleIndexForward(e)}>
              <ArrowIosForwardOutline size='64' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectProps {
  toggleOpen: (event: React.MouseEvent<HTMLDivElement>) => void;
  title: string;
  imageURL: string;
  videoURL?: string;
  blurb: string;
  description: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <div
      className='bg-gray-400 rounded-lg shadow-xl grow cursor-pointer absolute'
      onClick={(e) => props.toggleOpen(e)}>
      <div className='flex flex-col'>
        <div
          className='bg-black orbitron-font w-full py-4 text-2xl text-white text-center stroke rounded-t-lg shadow-xl'
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(70,70,70,1) 0%, rgba(0,0,0,1) 100%)',
          }}>
          {props.title}
        </div>
        <div className='p-4'>
          <img
            className='mx-auto rounded'
            style={{ width: '80%' }}
            src={props.imageURL}
            alt='Placeholder'
          />
          <div className='my-8 text-center'>{props.blurb}</div>
        </div>
      </div>
    </div>
  );
};

const ProjectModal: React.FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <div className=' bg-gray-400 rounded-lg shadow-xl lg:w-1/3 md:w-4/5 overflow-auto'>
      <div className='flex flex-col '>
        <div
          className='bg-black orbitron-font w-full py-4 text-2xl text-white text-center stroke rounded-t-lg shadow-xl flex flex-row justify-between px-4'
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(70,70,70,1) 0%, rgba(0,0,0,1) 100%)',
          }}>
          <div onClick={(e) => props.toggleOpen(e)} className='cursor-pointer'>
            <CloseOutline size='24' className='text-gray-400' />
          </div>
          {/* Title */}
          {props.title}
          <div className='w-4'></div>
        </div>
        <div className='p-4 overflow-auto scroll' style={{ height: '80vh' }}>
          {/* {props.videoURL ? (
            <iframe src={props.videoURL}></iframe>
          ) : (
            )} */}
          <img
            className='mx-auto rounded'
            style={{ width: '80%' }}
            src={props.imageURL}
            alt='Placeholder'
          />
          {props.githubLink !== 'N/A' ? (
            <div>
              <div className='my-4 text-left font-bold underline'>
                <a
                  href={props.githubLink}
                  target='_blank'
                  className=' hover:text-purple-600'>
                  Check out source code
                </a>
              </div>
              <hr className='my-2 bg-black' />
            </div>
          ) : null}
          <div className='my-8 mx-auto text-left w-4/5'>
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
