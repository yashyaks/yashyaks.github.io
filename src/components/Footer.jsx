import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin,FaPhoneAlt,FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
<footer className="max-w-[85rem] items-center mx-auto my-10 px-4 py-10 sm:px-6 lg:px-8 rounded-2xl bg-risd_blue-100">
  <div className="text-center">
    <div>
      <a className="flex-none text-2xl block font-Poppins font-bold text-white dark:text-white" href="#">🤖 yashyaks</a>
    </div>
    <div className="mt-3">
      <p className="font-Quicksand text-xl text-white">Yash Thakar</p>
    </div>

<div className="flex justify-around items-start my-5"></div>
    <div className="mt-3 space-x-2">
      <a className="inline-flex justify-center items-center w-10 h-10 text-center text-white hover:bg-gray-100 rounded-full dark:text-white dark:hover:text-risd_blue-400 dark:hover:bg-white" target="_blank" href="tel:+91 8291006737">
        <FaPhoneAlt/>
      </a>
      <a className="inline-flex justify-center items-center w-10 h-10 text-center text-white hover:bg-gray-100 rounded-full dark:text-white dark:hover:text-risd_blue-400 dark:hover:bg-white" target="_blank"  href="mailto:yashthakar2710@gmail.com">
        <HiOutlineMail/>
      </a>
      <a className="inline-flex justify-center items-center w-10 h-10 text-center text-white hover:bg-gray-100 rounded-full dark:text-white dark:hover:text-risd_blue-400 dark:hover:bg-white" target="_blank" href="https://www.linkedin.com/in/thakaryash/">
        <FaLinkedin/>
      </a>
      <a className="inline-flex justify-center items-center w-10 h-10 text-center text-white hover:bg-gray-100 rounded-full dark:text-white dark:hover:text-risd_blue-400 dark:hover:bg-white" target="_blank" href="https://github.com/yashyaks/">
        <FaGithub />

      
      </a>
    </div>
  </div>
</footer>
  )
}

