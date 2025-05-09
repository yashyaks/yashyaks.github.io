import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-1/4 h-auto lg:sticky top-0 p-4 bg-gray-100 font-Poppins flex flex-col items-center">
      <img
        src="/hero-square.jpg"
        alt="Profile"
        className="rounded-full mb-4 w-32 lg:w-40"
      />
      <h2 className="text-xl lg:text-2xl font-bold link link-underline link-underline-black">Yash Thakar</h2>
      <ul className="flex flex-row lg:flex-col mt-4 text-md">

        <li className="flex items-center">
          <span className="m-2 text-white">
            <FaGithub size={25} />
          </span>
          <a
            href="https://github.com/yashyaks"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block hover:underline"
          >
            yashyaks
          </a>
        </li>

        <li className="flex items-center">
          <span className="m-2 text-white">
            <FaLinkedin size={25} />
          </span>
          <a
            href="https://linkedin.com/in/thakaryash"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block hover:underline"
          >
            thakaryash
          </a>
        </li>

        <li className="flex items-center">
          <span className="m-2 text-white">
            <HiOutlineMail size={25} />
          </span>
          <a href="mailto:yashthakar2710@gmail.com" className="hidden lg:block hover:underline">
            yashthakar2710@gmail.com
          </a>
        </li>
      </ul>
    </aside>
  );
}
