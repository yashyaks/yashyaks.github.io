import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin,FaPhoneAlt,FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
<footer className="max-w-[75rem] items-center mx-5 my-10 py-10 sm:mx-10 lg:mx-10 xl:mx-auto rounded-2xl bg-risd_blue-100">
  <div className=" items-center text-center">
    <div>
      <a className="flex-none text-2xl block font-Poppins font-bold text-white hover:text-risd_blue-400" href="#">🤖 yashyaks</a>
    </div>
    <div className="mt-3">
      <p className="font-Quicksand text-xl text-white">Yash Thakar</p>
    </div>

<div className="flex justify-around items-start my-5"></div>
    <div className="mt-3 space-x-2">
      <a className="inline-flex justify-center items-center w-10 h-10 text-center text-white rounded-full hover:text-risd_blue-400 hover:bg-white" target="_blank" href="tel:+91 8291006737">
        <FaPhoneAlt/>
      </a>
      <a className="inline-flex justify-center items-center w-10 h-10 text-center text-white rounded-full hover:text-risd_blue-400 hover:bg-white" target="_blank"  href="mailto:yashthakar2710@gmail.com">
        <HiOutlineMail/>
      </a>
      <a className="inline-flex justify-center items-center w-10 h-10 text-center text-white rounded-full hover:text-risd_blue-400 hover:bg-white" target="_blank" href="https://www.linkedin.com/in/thakaryash/">
        <FaLinkedin/>
      </a>
      <a className="inline-flex justify-center items-center w-10 h-10 text-center text-white rounded-full hover:text-risd_blue-400 hover:bg-white" target="_blank" href="https://github.com/yashyaks/">
        <FaGithub />
      </a>
      <a className="inline-flex justify-center items-center w-10 h-10 text-center text-white rounded-full hover:text-risd_blue-400 hover:bg-white" target="_blank" href="https://github.com/yashyaks/">
        <img className="h-5" src="./public/blog.png" alt="Image Description">
        </img>
      </a>

    </div>
  </div>
</footer>
  )
}

