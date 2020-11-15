import React from 'react';
import {
  Home as HomeIcon,
  Briefcase as ProjectIcon,
  Person as PersonIcon,
} from '@styled-icons/octicons';
import {
  GithubOutline as Github,
  LinkedinOutline as Linkedin,
  TwitterOutline as Twitter,
} from '@styled-icons/evaicons-outline';
import { NavLink } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const Navbar: React.FC<Props> = (props: Props) => {
  return (
    <div className='w-full z-10 absolute overscroll-none overflow-hidden'>
      <div className='min-h-screen flex-col flex justify-between md:transform md:rotate-25'>
        <div className='h-12 md:h-20 bg-gray-400 shadow-2xl md:px-64 z-20'>
          <div className='flex md:justify-end justify-center items-center h-full'>
            <a
              href='https://github.com/jarethrader'
              target='_blank'
              className='text-black hover:text-purple-600 px-8 transform md:-rotate-25 focus:outline-none'>
              <Github size='48' />
            </a>
            <a
              href='https://linkedin.com/in/jareth-rader'
              target='_blank'
              className='text-black hover:text-purple-600 px-8 transform md:-rotate-25 focus:outline-none'>
              <Linkedin size='48' />
            </a>
          </div>
        </div>
        <div className='h-screen w-full absolute py-20 md:py-24'>
          {props.children}
        </div>

        <div className='h-12 md:h-20 bg-gray-400 z-20 shadow-2xl w-full'>
          <div className='md:mx-48 flex justify-center md:justify-start items-center h-full'>
            <NavLink
              activeStyle={{
                color: 'black',
              }}
              to='/home'
              className='transform md:-rotate-25 px-8 hover:text-black text-purple-600 focus:outline-none'>
              <HomeIcon size='32' title='Home' />
            </NavLink>
            <NavLink
              activeStyle={{
                color: 'black',
              }}
              to='/projects'
              className='transform md:-rotate-25 px-8 hover:text-black text-purple-600 focus:outline-none'>
              <ProjectIcon size='32' title='Projects' />
            </NavLink>
            <NavLink
              activeStyle={{
                color: 'black',
              }}
              to='/about'
              className='transform md:-rotate-25 px-8 hover:text-black text-purple-600 focus:outline-none'>
              <PersonIcon size='32' title='About Me' />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
