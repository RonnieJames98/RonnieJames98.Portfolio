import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className= 'bg-emerald-950 w-full h-screen'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-slate-300'>Ronnie James Espinosa</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>Fullstack Developer</h2>
            <p className='text-slate-300 py-4 max-w-[700px] text-2xl'>
                I am a Computer Science Major looking for new and exciting opportunities for Software and Web Development.
                I specialize in Front-End Development and UI/UX design. In my spare time, I like to familiarize myself with the Adobe Creative Suite and Music Production. 
            
            </p>
            <div className='w-[175px]'>

                
                <Link to='projects' smooth={true} duration={500}>
                    <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-sky-600 hover:border-sky-600 duration-500'>View Projects 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className="ml-2" /> 
                        </span>
                    </button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Home
