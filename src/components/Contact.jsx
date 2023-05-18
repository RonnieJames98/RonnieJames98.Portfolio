import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-emerald-950 flex justify-center items-center p-4 text-gray-300'>
      <form action="https://getform.io/f/4b89b46d-2ce2-43b2-a3d1-8c6c9523d394" className='flex flex-col max-w-[600px] w-full' method='POST'>
        <div className='pb-8'>
            <h1 className='text-4xl font-bold inline border-b-4 border-sky-600'>Contact Me</h1>
            <p className='pt-7 text-3xl'>Submit the form below or email me at ronniejespinosa1998@gmail.com</p>
        </div>
        <input className='bg-gray-100 p-2 text-black' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-gray-100' type='email' placeholder='Email' name='email' />
        <textarea className='bg-gray-100 p-2' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-sky-600 hover:border-sky-600 px-4 py-3 my-3 mx-auto flex items-center duration-500'>Let's Connect</button>
      </form>
    </div>
  )
}

export default Contact
