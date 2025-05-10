import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
const d = new Date();
let year = d.getFullYear();

export default function Footer() {
  return (
<footer className="max-w-full items-center py-24 border-2 border-black border-t-gray bg-black">
  <div className=" items-center text-center">
    <div>
      <a class="flex items-center justify-center text-2xl font-Poppins text-white" href="#">
        <img src="/emoji_robot.svg" alt="Description" class="w-6 h-6 mb-1 mr-2" /> 
        <span>yashyaks</span>
      </a>
    </div>
    <div className="font-Poppins text-white mt-3">
      <p className="text-xl">Yash Thakar</p>
      <p>&copy; {year}</p>
    </div>

<div className="flex justify-around items-start my-5"></div>
    <div className="mt-3 space-x-2">
      <a className="inline-flex justify-center items-center w-12 h-12 text-center text-white rounded-full hover:text-black hover:bg-white" target="_blank" href="https://github.com/yashyaks/">
        <FaGithub size={25}/>
      </a>

      <a className="inline-flex justify-center items-center w-12 h-12 text-center text-white rounded-full hover:text-black hover:bg-white" target="_blank" href="https://github.com/yashyaks/">
        <FaHashnode size={25}/>
      </a>

      <a className="inline-flex justify-center items-center w-12 h-12 text-center text-white rounded-full hover:text-black hover:bg-white" target="_blank" href="https://www.linkedin.com/in/thakaryash/">
        <FaLinkedin size={25}/>
      </a>
      
      <a className="inline-flex justify-center items-center w-12 h-12 text-center text-white rounded-full hover:text-black hover:bg-white" target="_blank"  href="https://mail.google.com/mail/?view=cm&fs=1&to=yashthakar2710@gmail.com">
        <HiOutlineMail size={25}/>
      </a>

    </div>
  </div>
</footer>
  )
}

