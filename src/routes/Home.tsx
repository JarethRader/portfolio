import React from 'react';
import { GripLinesVertical } from '@styled-icons/fa-solid';
import { useSpring, animated, config } from 'react-spring';

interface Props {}

const Home = (props: Props) => {
  return (
    <div className='transform md:-rotate-25 md:mx-20 flex justify-start'>
      <div className='text-center orbitron-font'>
        <div className='text-6xl px-4 stroke'>Jareth Rader</div>
        <hr className='shadow-xl pb-2' />
        <div className='flex-row flex items-center justify-center flex-wrap'>
          <div className='text-xl text-gray-200'>Fullstack Developer</div>
          <GripLinesVertical size='24' className='text-purple-600' />
          <div className='text-xl text-gray-200'>React</div>
          <GripLinesVertical size='24' className='text-purple-600' />
          <div className='text-xl text-gray-200'>Node</div>
        </div>
        <div>
          <img
            src='https://s3-us-west-1.amazonaws.com/www.jarethrader.com/resources/JRLogo.png'
            alt='JR Icon'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
