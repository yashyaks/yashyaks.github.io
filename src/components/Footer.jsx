import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const d = new Date();
let year = d.getFullYear();

export default function Footer() {
  return (
    <footer className="max-w-full pt-16 pb-32 px-24 border-t-2 border-t-gray bg-black text-white font-Poppins">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Centered Logo and Name */}
        <div className="flex flex-col">
          <a className="flex items-center text-2xl font-semibold" href="#">
            <img
              src="/Dark.png"
              alt="Logo"
              className="w-[166.67px] h-[41.66px] sm:w-[200px] sm:h-[50px]"
            />
          </a>
          <p className="lg:text-left text-center items-left mt-5 text-sm text-white-light">©{year} Yash Thakar</p>
        </div>

        {/* Social Icons */}
        <div className="flex mt-10 lg:mt-0 space-x-3">
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-white rounded-full hover:text-black hover:bg-white transition"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/yashyaks/"
          >
            <FaGithub size={25} />
          </a>
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-white rounded-full hover:text-black hover:bg-white transition"
            target="_blank"
            rel="noopener noreferrer"
            href="https://hashnode.com/@yashyaks"
          >
            <FaHashnode size={25} />
          </a>
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-white rounded-full hover:text-black hover:bg-white transition"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/thakaryash/"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-white rounded-full hover:text-black hover:bg-white transition"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yashthakar2710@gmail.com"
          >
            <HiOutlineMail size={25} />
          </a>
        </div>
      </div>
<div className="flex justify-center my-16 text-white-light">
  {[...Array(4)].map((_, i) => (
    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path
        stroke="currentColor"
        strokeWidth="1.2"
        d="M5.6 2.53s.15-.65.4-.65.4.65.4.65c.67 2.24.84 2.4 3.07 3.07 0 0 .65.15.65.4s-.65.4-.65.4c-2.24.67-2.4.84-3.07 3.07 0 0-.15.65-.4.65s-.4-.65-.4-.65c-.67-2.24-.84-2.4-3.07-3.07 0 0-.65-.15-.65-.4s.65-.4.65-.4c2.24-.67 2.4-.84 3.07-3.07Z"
      />
    </svg>
  ))}
</div>
    </footer>
  );
}
