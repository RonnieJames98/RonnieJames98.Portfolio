import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactJS from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Photoshop from '../assets/photoshop.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-emerald-950 text-slate-300 w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <h1 className='text-4xl font-bold inline border-b-4 border-sky-600'>Skills</h1>
                <p className='py-4 text-3xl'>Frameworks / Coding Languages / Software</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md hover:scale-110 duration-500 bg-amber-950 py-3'>
                    <img src={HTML} alt='HTML' className='w-20 mx-auto' />
                    <p className='my-4 text-xl'>HTML</p>
                </div>

                <div className='shadow-md hover:scale-110 duration-500 bg-amber-950 py-3'>
                    <img src={CSS} alt='CSS' className='w-20 mx-auto' />
                    <p className='my-4 text-xl'>CSS</p>
                </div>

                <div className='shadow-md hover:scale-110 duration-500 bg-amber-950 py-3'>
                    <img src={JavaScript} alt='JavaScript' className='w-20 mx-auto' />
                    <p className='my-4 text-xl'>JAVASCRIPT</p>
                </div>

                <div className='shadow-md hover:scale-110 duration-500 bg-amber-950 py-3'>
                    <img src={ReactJS} alt='ReactJS' className='w-20 mx-auto' />
                    <p className='my-4 text-xl'>REACT</p>
                </div>

                <div className='shadow-md hover:scale-110 duration-500 bg-amber-950 py-3'>
                    <img src={Tailwind} alt='Tailwind' className='w-20 mx-auto' />
                    <p className='my-4 text-xl'>TAILWIND</p>
                </div>

                <div className='shadow-md hover:scale-110 duration-500 bg-amber-950 py-3'>
                    <img src={GitHub} alt='GitHub' className='w-20 mx-auto' />
                    <p className='my-4 text-xl'>GITHUB</p>
                </div>

                <div className='shadow-md hover:scale-110 duration-500 bg-amber-950 py-3'>
                    <img src={Photoshop} alt='Photoshop' className='w-20 mx-auto' />
                    <p className='my-4 text-xl'>PHOTOSHOP</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills
