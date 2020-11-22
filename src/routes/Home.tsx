import React from 'react';
import { GripLinesVertical } from '@styled-icons/fa-solid';
import { useSpring, animated, config } from 'react-spring';

interface Props {}

const Home = (props: Props) => {
  return (
    <div className='transform md:-rotate-25 md:mx-20 w-full h-screen md:flex md:flex-row md:justify-evenly md:overflow-hidden overflow-auto scroll'>
      <div className='text-center orbitron-font flex justify-start flex-col'>
        <div className='text-6xl px-4 stroke md:whitespace-no-wrap'>
          Jareth Rader
        </div>
        <hr className='shadow-xl pb-2' />
        <div className='flex-row flex items-center justify-center flex-wrap'>
          <div className='text-xl text-gray-200'>Fullstack Developer</div>
          <GripLinesVertical size='24' className='text-purple-600' />
          <div className='text-xl text-gray-200'>React.JS</div>
          <GripLinesVertical size='24' className='text-purple-600' />
          <div className='text-xl text-gray-200'>Node.JS</div>
        </div>
        <div>
          <img
            src='https://d2q1q2xjiqiovj.cloudfront.net/portfolio/resources/JRLogo.png'
            alt='JR Icon'
          />
        </div>
      </div>
      <div className='flex md:items-center items-baseline md:px-8 md:h-full h-65'>
        <div>
          <img
            style={{
              width: '45rem',
            }}
            src='https://d2q1q2xjiqiovj.cloudfront.net/portfolio/resources/JarethNebula.png'
            alt='JR Icon'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
