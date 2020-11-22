import React from 'react';

interface Props {}

const About = (props: Props) => {
  return (
    <div
      className='lg:overflow-hidden overflow-auto scroll mb-10'
      style={{ height: '80vh' }}>
      <div className='h-full transform md:-rotate-25 md:mx-24 flex justify-start'>
        <div className='lg:grid lg:grid-cols-5 flex flex-col'>
          <div className='text-center orbitron-font w-full lg:col-span-3'>
            <div className='text-6xl px-4 stroke'>About Me</div>
            <hr className='shadow-xl pb-2' />
            <div className='text-right text-white text-xl px-4'>
              <p className='md:px-0 px-4'>
                I am a fullstack developer, I grew up in Grand Junction,
                Colorado; I enjoy hiking and riding my bike; I studied physics
                at Colorado Mesa University, which probably means I'm really
                good at math; Now a days I spend most of my time programming; I
                just want to make something my mom will be proud of.
              </p>
              <br className='py-6' />
              <p className='md:px-0 px-4 pb-2'>
                I first stared learning to program in java when I was 16. I
                mostly work on robotics projects and made stuff with arduinos
                and raspberry pi's. For the past 3 years I've been focused on
                web development. What I like the most is getting to see how
                every part of an application stack works together, and all the
                intricate "magic" that is hidden behind websites you don't ever
                get noticed.
              </p>
            </div>
            <hr className='shadow-xl pb-2' />
          </div>
          <div className='flex justify-end items-end w-full lg:col-span-2 xl:pt-64'>
            <div className='text-center orbitron-font w-full'>
              {/* <hr className='shadow-xl pb-2' /> */}
              <div className='text-left text-white text-xl flex flex-row justify-center'>
                <img
                  src='https://d2q1q2xjiqiovj.cloudfront.net/portfolio/resources/JarethNebula2.png'
                  alt='Jareth'
                  className='w-full'
                />
              </div>
              {/* <hr className='shadow-xl pb-2' /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
