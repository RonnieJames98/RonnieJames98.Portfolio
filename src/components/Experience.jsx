import React from 'react';

const Experience = () => {
  return (
    <div name='experience' className='w-[full] md:h-screen bg-emerald-950 flex justify-center items-center p-4 text-slate-300'>
      {/* Everything in 1 Col */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
      {/* Job Entry */}
      <div className='flex flex-col justify-center items-center w-full mb-10'>
        <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8 md:px-8 sm:px-4'>
            <div className='sm:text-right pb-8 md:pl-4 '>
                <h1 className='text-4xl font-bold inline border-b-4 border-sky-600'>Fullstack Development Instructor</h1>
            </div>
            <div>
                <h1 className='text-4xl font-bold md:text-center sm:text-right'>February 2022 - Present</h1>
            </div>
        </div>
         <div className='sm:text-right text-3xl font-bold pb-3'>
             <h1>Zenith Prep Academy</h1>
         </div>
         <div className='text-center'>
             <p className='mb-2 text-xl'>Educate students in Front-End Development (HTML/CSS/Javascript) and Back-End Development (PHP/ SQL) within a 15 class time frame.</p>
             <p className='mb-2 text-xl'>Train students with no prior programming experience to build a fully functional front-end website that functions as a product landing page.</p>
             <p className='mb-2 text-xl'>Direct students in building a social-media based platform (utilizing SQL databases) for the final project.</p>
             <p className='mb-2 text-xl'>Provide college counseling amongst 30+ students who have completed the curriculum.</p>
             <p className='mb-2 text-xl'>Record and edit 60+ hours of lecture for students who were unable to attend the class session.</p>
        </div>
      </div>
      
      {/* Job Entry */}
      <div className='flex flex-col justify-center items-center w-full mb-10'>
        <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8 md:px-8 sm:px-4'>
            <div className='sm:text-right pb-8 md:pl-4 '>
                <h1 className='text-4xl font-bold inline border-b-4 border-sky-600'>Coding Instructor</h1>
            </div>
            <div>
                <h1 className='text-4xl font-bold md:text-center sm:text-right'>June 2021 - February 2022</h1>
            </div>
        </div>
         <div className='sm:text-right text-3xl font-bold pb-3'>
             <h1>Coding Minds Academy</h1>
         </div>
         <div className='text-center'>
             <p className='mb-2 text-xl'>Cultivated K-12 Students to become future Software Developers, Web Developers, and Game Developers.</p>
             <p className='mb-2 text-xl'>Instructed classes in a 1-on-1 or 1-on-2 environment with Object Oriented Programming (OOP) Languages such as Python, C#, Java, Javascript, and LUA.</p>
             <p className='mb-2 text-xl'>Lead over 40+ classes designed to nurture and educate students with a focus on coding fundamentals, identifying errors, and scalable program design.</p>
             <p className='mb-2 text-xl'>Organized class structure for 16 week courses and willingly substituted for classes on short notice for coworker emergencies.</p>
             <p className='mb-2 text-xl'>Developed and optimized teaching curriculum for the HTML/CSS, Unity 1, Unity 2 and C#, and Java courses.</p>
             <p className='mb-2 text-xl'>Guided students in the last 4 weeks of class to conceptualize and develop their own personal projects as a final project.</p>
         </div>
      </div>
        
      </div>
      
    </div>
  )
}

export default Experience
