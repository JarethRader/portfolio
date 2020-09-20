import React from 'react';

interface Props {}

const About = (props: Props) => {
  return (
    <div className='overflow-auto scroll mb-10' style={{ height: '80vh' }}>
      <div className='transform md:-rotate-25 md:mx-20 flex justify-start'>
        <div className='text-center orbitron-font md:w-1/2'>
          <div className='text-6xl px-4 stroke'>About Me</div>
          <hr className='shadow-xl pb-2' />
          <div className='text-right text-white text-xl'>
            <p className='md:px-0 px-4'>
              I am a fullstack developer, I grew up in Grand Junction, Colorado;
              I really like grilled cheese sandwiches; I majored in physics at
              Colorado Mesa University, which probably means I'm really good at
              math; Now a days I spend most of my time programming; I just want
              to make something my mom will be proud of.
            </p>
          </div>
          <hr className='shadow-xl pb-2' />
        </div>
      </div>
      {/* <div className='md:mx-20 flex justify-end pt-20'>
        <div className='text-center orbitron-font md:w-1/2'>
          <hr className='shadow-xl pb-2' />
          <div className='text-left text-white text-xl'>
            <p>
              I am a fullstack developer, I grew up in Grand Junction, Colorado;
              I really like grilled cheese sandwiches; I majored in physics in
              college which probably means I'm really good at math; Now a days I
              probably spend most of my days programming; I just want to make
              something my mom will be proud of.
            </p>
          </div>
          <hr className='shadow-xl pb-2' />
        </div>
      </div> */}
    </div>
  );
};

export default About;
