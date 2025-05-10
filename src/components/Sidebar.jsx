import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-1/4 h-auto lg:sticky top-0 p-4 bg-gray-100 font-Poppins flex flex-col items-center relative z-10">
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 rounded-full bg-blue blur-xl opacity-75 z-0"></div>
        <img
          src="/hero-square.jpg"
          alt="Avatar"
          className="relative rounded-full w-full h-full z-20 border-2 border-blue object-cover"
        />
      </div>

      <h2 className="mt-6 text-xl lg:text-2xl font-bold link link-underline link-underline-black">Yash Thakar</h2>

      <ul className="flex flex-row lg:flex-col mt-4 text-md">
        <li className="flex items-center">
          <a href="https://github.com/yashyaks" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:underline">
            <FaGithub size={25} className="m-2" />
            <span className="hidden lg:block">yashyaks</span>
          </a>
        </li>
        <li className="flex items-center">
          <a href="https://linkedin.com/in/thakaryash" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:underline">
            <FaLinkedin size={25} className="m-2" />
            <span className="hidden lg:block">thakaryash</span>
          </a>
        </li>
        <li className="flex items-center">
          <a href="mailto:yashthakar2710@gmail.com" className="flex items-center text-white hover:underline">
            <HiOutlineMail size={25} className="m-2" />
            <span className="hidden lg:block">yashthakar2710@gmail.com</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
