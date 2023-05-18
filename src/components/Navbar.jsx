import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaGit } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from'react-icons/bs';
import { Link } from 'react-scroll';

import Resume from '../assets/RonnieJamesEspinosa2023.pdf';
import Logo from '../assets/logo.png';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-slate-900 text-gray-300 z-10'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:"50px"}} />
        </div>

        {/* Menu Bar */}
        <ul className='hidden md:flex'>
            <li className='text-xl hover:border-b-4 hover:border-sky-600 duration-300'><Link to='home' smooth={true} duration={500}>Home</Link></li>
            {/* <li><Link to='about' smooth={true} duration={500}>About</Link></li> */}
            <li className='text-xl hover:border-b-4 hover:border-sky-600 duration-300'><Link to='experience' smooth={true} duration={500}>Experience</Link></li>
            <li className='text-xl hover:border-b-4 hover:border-sky-600 duration-300'><Link to='projects' smooth={true} duration={500}>Projects</Link></li>
            <li className='text-xl hover:border-b-4 hover:border-sky-600 duration-300'><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li className='text-xl hover:border-b-4 hover:border-sky-600 duration-300'><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/* Hamburger Menu */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center '}>
            <li className='py-6 text-4xl '><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
            {/* <li className='py-6 text-4xl '><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li> */}
            <li className='py-6 text-4xl '><Link onClick={handleClick} to='experience' smooth={true} duration={500}>Experience</Link></li>
            <li className='py-6 text-4xl '><Link onClick={handleClick} to='projects' smooth={true} duration={500}>Projects</Link></li>
            <li className='py-6 text-4xl '><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl '><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>            
        </ul>

        {/*Social Links*/}
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
            <ul>
                {/*LinkedIn*/}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-700'>
                    <a className='flex justify-between items-center w-full text-stone-200' href="https://www.linkedin.com/in/ronnie-espinosa1998/" target="_blank" rel="noreferrer noopener"> LinkedIn <FaLinkedin size={30}/></a>
                </li>
                
                {/*Github*/}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-800'>
                    <a className='flex justify-between items-center w-full text-stone-200' href="https://github.com/RonnieJames98?tab=repositories" target="_blank" rel="noreferrer noopener"> Github <FaGithub size={30}/></a>
                </li>

                {/*Contact Me*/}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-amber-950'>
                    <Link className='flex justify-between items-center w-full text-stone-300' to='contact' smooth={true} duration={500}>Contact Me <HiOutlineMail size={30}/></Link>
                </li>

                {/*Resume*/}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-800'>
                    <a className='flex justify-between items-center w-full text-stone-300' href={Resume} target="_blank" rel="noreferrer noopener"> Resume <BsFillPersonLinesFill size={30}/></a>
                </li>
            </ul>

        </div>
    
    </div>
  )
}

export default Navbar
