import React from 'react';
import {
  Home as HomeIcon,
  Briefcase as ProjectIcon,
  Person as PersonIcon,
} from '@styled-icons/octicons';
import {
  GithubOutline as Github,
  LinkedinOutline as Linkedin,
  // TwitterOutline as Twitter,
} from '@styled-icons/evaicons-outline';
import { File as Resume } from '@styled-icons/boxicons-regular';
import { NavLink } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

interface Props {
  children: React.ReactNode;
}

const Navbar: React.FC<Props> = (props: Props) => {
  return (
    <div className='w-full z-10 absolute overscroll-none overflow-hidden'>
      <div className='min-h-screen flex-col flex justify-between md:transform md:rotate-25'>
        <div className='h-16 md:h-20 bg-gray-400 shadow-2xl md:px-64 z-20'>
          <div className='flex md:justify-end justify-center md:items-start items-baseline h-full'>
            <NavAnchor
              icon={Github}
              title='Github'
              URL='https://github.com/jarethrader'
            />
            <NavAnchor
              icon={Linkedin}
              title='LinkedIn'
              URL='https://linkedin.com/in/jareth-rader'
            />
            <NavAnchor
              icon={Resume}
              title='Resume'
              URL='https://d2q1q2xjiqiovj.cloudfront.net/portfolio/resume/JarethRaderResume.pdf'
            />
          </div>
        </div>
        <div className='h-screen w-full absolute py-20 md:py-24'>
          {props.children}
        </div>
        <div className='h-16 md:h-20 bg-gray-400 z-20 shadow-2xl w-full'>
          <div className='md:mx-48 flex xl:justify-start justify-center lg:items-baseline h-full'>
            <NavIcon icon={HomeIcon} title='Home' path='/home' />
            <NavIcon icon={ProjectIcon} title='Projects' path='/projects' />
            <NavIcon icon={PersonIcon} title='About' path='/about' />
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavIconProps {
  icon: any;
  title: string;
  path: string;
}

const NavIcon = (NavProps: NavIconProps) => {
  const [toggle, set] = React.useState(false);
  const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className='transform md:-rotate-25 px-6'>
      <NavLink
        onMouseEnter={(e) => {
          set(true);
        }}
        onMouseLeave={(e) => {
          set(false);
        }}
        activeStyle={{
          color: 'black',
        }}
        to={NavProps.path}
        className=' md:px-8 px-6 hover:text-black text-purple-600 focus:outline-none'>
        <div>
          {transitions.map(({ item, key, props }) =>
            item ? (
              <animated.div style={props} key={key}>
                <h1 className='orbitron-font'>{NavProps.title}</h1>
              </animated.div>
            ) : (
              <animated.div style={props} key={key}>
                <div className='flex justify-center'>
                  <NavProps.icon size='32' title={NavProps.title} />
                </div>
              </animated.div>
            )
          )}
        </div>
      </NavLink>
    </div>
  );
};

interface NavAnchorProps {
  icon: any;
  title: string;
  URL: string;
}

const NavAnchor = (NavProps: NavAnchorProps) => {
  const [toggle, set] = React.useState(false);
  const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className='transform md:-rotate-25 px-6'>
      <a
        onMouseEnter={(e) => {
          set(true);
        }}
        onMouseLeave={(e) => {
          set(false);
        }}
        href={NavProps.URL}
        // download
        target='_blank'
        className='transform md:-rotate-25 md:px-8 px-6 hover:text-black text-purple-600 focus:outline-none cursor-pointer'>
        <div className=''>
          {transitions.map(({ item, key, props }) =>
            item ? (
              <animated.div style={props} key={key}>
                <h1 className='orbitron-font flex self-end'>
                  {NavProps.title}
                </h1>
              </animated.div>
            ) : (
              <animated.div style={props} key={key}>
                <div className='flex justify-end'>
                  <NavProps.icon size='32' title={NavProps.title} />
                </div>
              </animated.div>
            )
          )}
        </div>
      </a>
    </div>
  );
};

export default Navbar;
