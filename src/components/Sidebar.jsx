import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray text-white p-6 flex flex-col items-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end text-2xl"
          >
            &times;
          </button>

          <img
            src="/hero-square.jpg"
            alt="Avatar"
            className="w-32 h-32 rounded-full border-2 border-blue my-4 object-cover"
          />

          <nav className="flex flex-col items-center space-y-4 mt-4 text-lg">
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#blog">Blog</a>
          </nav>

          <div className="mt-6 flex space-x-4">
            <a href="https://github.com/yashyaks" target="_blank" rel="noopener noreferrer"><FaGithub size={25} /></a>
            <a href="https://linkedin.com/in/thakaryash" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25} /></a>
            <a href="mailto:yashthakar2710@gmail.com"><HiOutlineMail size={25} /></a>
          </div>
        </div>
      )}

      {/* Regular Sidebar */}
      <aside className="w-full lg:w-1/4 h-auto lg:sticky top-0 p-4 bg-gray-100 font-Poppins flex flex-col items-center relative z-10">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden mb-4">
          <span>Menu</span>
        </button>

        {!isMenuOpen && (
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 rounded-full bg-blue blur-xl opacity-75 z-0"></div>
            <img
              src="/hero-square.jpg"
              alt="Avatar"
              className="relative rounded-full w-full h-full z-20 border-2 border-blue object-cover"
            />
          </div>
        )}

        <h2 className="mt-6 text-xl lg:text-2xl font-bold link link-underline link-underline-black">Yash Thakar</h2>
        <ul className="flex flex-row lg:flex-col mt-4 text-md">
          <li className="flex items-center">
            <span className="m-2 text-white"><FaGithub size={25} /></span>
            <a href="https://github.com/yashyaks" className="hidden lg:block hover:underline">yashyaks</a>
          </li>
          <li className="flex items-center">
            <span className="m-2 text-white"><FaLinkedin size={25} /></span>
            <a href="https://linkedin.com/in/thakaryash" className="hidden lg:block hover:underline">thakaryash</a>
          </li>
          <li className="flex items-center">
            <span className="m-2 text-white"><HiOutlineMail size={25} /></span>
            <a href="mailto:yashthakar2710@gmail.com" className="hidden lg:block hover:underline">yashthakar2710@gmail.com</a>
          </li>
        </ul>
      </aside>
    </>
  );
}
