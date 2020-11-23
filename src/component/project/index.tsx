import React from 'react';
import { StyledIcon } from 'styled-icons/types';
import {
  CloseOutline,
  ExternalLinkOutline,
  GithubOutline,
} from '@styled-icons/evaicons-outline';

interface ProjectProps {
  toggleOpen: (event: React.MouseEvent<HTMLDivElement>) => void;
  title: string;
  imageURL: string;
  blurb: string;
  description: string;
  githubLink: string;
  challenges: Array<string>;
  stack?: Array<{
    icon: StyledIcon;
    title: string;
  }>;
  liveLink?: string;
}

export const ProjectCard: React.FC<ProjectProps> = (props: ProjectProps) => {
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
          <div className='my-8 text-center montserrat-font'>{props.blurb}</div>
        </div>
      </div>
    </div>
  );
};

export const ProjectModal: React.FC<ProjectProps> = (props: ProjectProps) => {
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
          {props.title}
          <div className='w-4'></div>
        </div>
        <div className='p-4 overflow-auto scroll' style={{ height: '80vh' }}>
          <div className='md:grid md:grid-cols-2 md:gap-2 flex flex-col'>
            <img
              className='mx-auto rounded flex self-center w-full'
              src={props.imageURL}
              alt='Placeholder'
            />
            <div className='my-8'>
              <h1 className='orbitron-font font-bold text-center text-black'>
                Project Description
              </h1>
              <div className='mx-auto w-4/5 text-justify montserrat-font'>
                {props.description}
              </div>
            </div>
          </div>
          <div className='flex flex-row w-full justify-evenly'>
            {props.githubLink !== 'N/A' ? (
              <div className='text-left text-md'>
                <button className='px-8 py-4 rounded bg-black hover:bg-purple-600 cursor-pointer shadow hover:shadow-2xl text-white'>
                  <a
                    href={props.githubLink}
                    target='_blank'
                    className='orbitron-font'>
                    Source code
                  </a>
                  <GithubOutline size='32' title='Github' />
                </button>
              </div>
            ) : null}
            {props.liveLink !== 'N/A' ? (
              <div className='text-left text-md'>
                <button className='px-8 py-4 rounded bg-black hover:bg-purple-600 cursor-pointer shadow hover:shadow-2xl text-white'>
                  <a
                    href={props.liveLink}
                    target='_blank'
                    className='orbitron-font'>
                    View Live
                  </a>
                  <ExternalLinkOutline size='32' title='Github' />
                </button>
              </div>
            ) : null}
          </div>
          <hr className='my-2 bg-black' />
          <div className='my-8 mx-auto text-left w-4/5'>
            <h1 className='orbitron-font font-bold text-center'>
              Challenges I faced
            </h1>
            <ul className='list-outside list-disc text-justify montserrat-font'>
              {props.challenges.map((item, key) => (
                <li key={key}>{item}</li>
              ))}
            </ul>
          </div>
          <hr className='my-2 bg-black' />
          {props.stack !== undefined ? (
            <div>
              <h1 className='orbitron-font font-bold text-center'>
                Tech Stack
              </h1>
              <div className='flex flex-row flex-wrap justify-center py-4 montserrat-font'>
                {props.stack?.map((item, key) => (
                  <div className='p-4 flex flex-col' key={key}>
                    <div className='w-full flex justify-center'>
                      <item.icon size='32' title={item.title} />
                    </div>
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
