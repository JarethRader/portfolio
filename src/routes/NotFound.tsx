import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      className='min-h-screen w-full flex justify-center items-center'
      style={{
        minHeight: '100vh',
        background: '#rgb(45,41,51)',
        backgroundImage:
          'radial-gradient(circle, rgba(45,41,51,1) 0%, rgba(0,0,0,1) 100%)',
      }}>
      <div className='container'>
        <div className='container content-center'>
          <div className='col-md-12 text-center assistant-font text-lg'>
            <span className='font-black underline' style={{ fontSize: '25vh' }}>
              404
            </span>
            <div className='text-white text-3xl'>Page Not Found</div>
            <Link
              to='/'
              className='text-purple-600 underline hover:text-gray-400 hover:underline cursor-pointer'>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
