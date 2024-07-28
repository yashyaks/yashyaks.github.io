import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { IoMdOpen } from "react-icons/io";
import { FaLinkedin,FaPhoneAlt,FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
<>
<div className="max-w-[75rem] max-h-screen items-center mx-auto mb-16 px-4 sm:px-6  lg:px-8">
  <div className="items-center grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 ">
  {/* <div className="PHOTO">
      <img className="w-96 md:w-full rounded-3xl" src="./src/assets/hero-square.jpg" alt="Image Description"/>
    </div> */}
    <div className='INTRO'>
    {/* <div className=" mb-3 font-Poppins text-center text-risd_blue-300 lg:text-left">
      AI ML Developer | Data Science Enthusiast
      </div> */}
    <div className="font-Poppins text-center font-bold text-white text-2xl lg:text-left">
      Hey 👋, I am
      </div>
      <h1 className="font-Poppins block text-center text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl lg:text-left xl:text-7xl lg:leading-tight text-white ">
        <span className='font-Poppins block text-center text-5xl font-bold text-gray-800 sm:text-5xl lg:text-6xl lg:text-left xl:text-7xl lg:leading-tight text-white'>Yash Thakar</span>
      </h1>
      <p className="font-Poppins mt-3 text-center text-md lg:text-left text-gray-800">
      Final Year Computer Science and Engineering (Data Science) undergraduate.
      </p>
      <div className="mt-7 text-center grid md:grid-cols-2 gap-4 md:gap-1 xl:gap-4 sm:inline-flex">
        <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-Quicksand font-black rounded-lg bg-risd_blue-400 text-white hover:bg-gradient-to-tr from-risd_blue-300 via-risd_blue-400 to-risd_blue-800" target="_blank" href="https://docs.google.com/document/d/1_IK71nIJ77u-8tQr04PBfPl1wu1PVgygkIMKDcqaFaA/edit?usp=sharing">
          Resume
          <IoMdOpen />
        </a>
        <div className="items-center">
        {/* <a className="inline-flex justify-center text-xl items-center h-10 w-10 rounded-full  hover:bg-risd_blue-200 focus:ring-offset-white transition" target="_blank" href='tel:+91 8291006737'>
          <FaPhoneAlt />
        </a> */}
        <a className="inline-flex justify-center text-xl items-center h-10 w-10 rounded-full hover:bg-risd_blue-200 focus:ring-offset-white transition" target="_blank" href='mailto:yashthakar2710@gmail.com'>
          <HiOutlineMail />
        </a>
        <a className="inline-flex justify-center text-xl items-center h-10 w-10 rounded-full hover:bg-risd_blue-200 focus:ring-offset-white transition" target="_blank" href='https://www.linkedin.com/in/thakaryash/'>
          <FaLinkedin />
        </a>
        <a className="inline-flex justify-center text-xl items-center h-10 w-10 rounded-full hover:bg-risd_blue-200 focus:ring-offset-white transition" target="_blank" href='https://github.com/yashyaks/'>
          <FaGithub />
        </a>
        {/* <a className="inline-flex justify-center text-xl items-center h-10 w-10 rounded-full hover:bg-risd_blue-200 focus:ring-offset-white transition" target="_blank" href='https://yashyaks.hashnode.dev'>
          <img className="h-5" src="./public/blog.png" alt="Image Description">
          </img>
        </a> */}
        </div>
      </div>
    </div>
  <div>
      <img className="items-center justify-center w-96 md:w-full rounded-3xl" src="./src/assets/hero-square.jpg" alt="Image Description"/>
    </div>
  </div>
</div>
    </>
  )
}
