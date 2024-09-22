import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='relative max-w-[95rem] w-full mx-auto px-10 py-9 mb-9 flex justify-between items-center'>
        <div className="flex items-center w-full justify-between">
          <button onClick={toggleMenu} className="text-white lg:hidden">
            {isOpen ? <HiOutlineX size={25} /> : <HiOutlineMenu size={25}/>}
          </button>
          <a className="flex items-center text-3xl lg:text-4xl font-semibold font-Poppins text-white  mx-auto lg:mx-0">
          <Link to="/">
            <img src="/LOGO.png" alt="Description" className="w-[166.67px] h-[41.66px] sm:w-[250px] sm:h-[62.5px] lg:mr-2" />
          </Link>
          </a>
        </div>

        {/* Mobile Menu */}
        <nav className={`fixed top-0 left-0 lg:w-full lg:justify-end w-[80vw] h-full bg-background-light lg:bg-background transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:static lg:flex lg:translate-x-0 lg:h-auto z-20`}>
          <div className="lg:hidden p-6 pl-8 flex items-center bg-background">
          <Link to="/">
            <img
              src="/LOGO.png"
              alt="Description"
              className="w-[166.67px] h-[41.66px] sm:w-[200px] sm:h-[50px] lg:mr-2"
            />
          </Link>
            <button onClick={toggleMenu} className="text-white ml-auto">
              <HiOutlineX size={25} />
            </button>
          </div>
          <ul className="flex flex-col text-md lg:text-3xl font-Poppins text-white font-medium  lg:flex-row lg:items-center p-6 ml-4 lg:p-0">
            <li className="mb-4 lg:mb-0 lg:mr-6">
              <a className="link link-underline link-underline-black" href="/projects">
                Projects
              </a>
            </li>
            <li className="mb-4 lg:mb-0 lg:mr-6">
              <a className="link link-underline link-underline-black" href="/resume">
                Resume
              </a>
            </li>
            <li className="mb-4 lg:mb-0">
              <a className="link link-underline link-underline-black" href="https://yashyaks.hashnode.dev/">
                Blog
              </a>
            </li>
          </ul>
          {/* Social Media Links */}
          <div className="flex flex-col text-md font-Poppins text-white font-medium ml-4 pb-6 px-6 lg:hidden">
            Socials
          </div>

          <ul className="flex flex-row lg:hidden px-6 items-stretch">
          <li className="ml-4 flex items-center mb-4">
              <span className="mr-8 text-white">
                <a
                  href="https://github.com/yashyaks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md lg:text-lg font-Poppins text-white hover:underline"
                >
                </a>
                <FaGithub size={20}/>
              </span>
            </li>
            <li className="flex items-center mb-4">
              <span className="mr-8 text-white">
                <a
                  href="https://linkedin.com/in/thakaryash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md lg:text-lg font-Poppins text-white hover:underline"
                >
                </a>
                <FaLinkedin size={20}/>
              </span>
            </li>
            <li className="flex items-center mb-4">
              <span className="mr-8 text-white">
              <a href="mailto:yashthakar2710@gmail.com" className="text-md lg:text-lg font-Poppins text-white hover:underline">
              </a>
                <HiOutlineMail size={20} />
              </span>
            </li>
          </ul>
        </nav>

        {/* White tint overlay when the menu is open */}
        {isOpen && (
          <div 
            className="fixed top-0 left-[80vw] right-0 bottom-0 bg-white opacity-10 z-10 lg:hidden" 
            onClick={toggleMenu} // Clicking outside will also close the menu
          ></div>
        )}
      </header>
    </>
  );
}
