import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-emerald-950 text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <h1 className='text-4xl font-bold inline border-b-4 border-sky-600'>About</h1>
                </div>
                <div></div>
            </div>
            <div className='max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>My name is Ronnie James Espinosa</p>
                </div>
                <div>
                    <p>My name is Ronnie James Espinosa and I am a Computer Science graduate looking for new and exciting opportunities for Software and Web Development. 
                I specialize in Front-End Development and UI/UX design. 
                In my spare time I like to familiarize myself with Video Editing Software and Music Production.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
