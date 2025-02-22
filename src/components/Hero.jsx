import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaHashnode } from "react-icons/fa6";
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar';

export default function Hero() {
  return (
    <>
    <Navbar/>
    <div className="max-w-[80rem] font-Poppins w-full mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col lg:flex-row">
      <Sidebar/>
      <main className="border-2 rounded-lg border-gray w-full lg:w-3/4 p-4 sm:p-8">
        <h1 className="border-b-2 border-b-gray text-2xl font-semibold sm:text-3xl mb-6">
        About Me
        </h1>
        <section className='mb-6 space-y-4'>
          <h2 className="font-medium text-lg sm:text-xl text-blue-600">
            Hello! I am Yash Thakar <span className="text-2xl">👋,</span>
          </h2>

            <p className="font-normal text-gray-600 leading-8">
            I am a passionate and driven Final Year Computer Science & Engineering student with a specialization in Data Science at DJSCE, University of Mumbai. I have continuously pushed myself to explore the vast realms of Artificial Intelligence, Machine Learning, and Data Engineering always striving to stay at the cutting edge of technology.
            </p>
            <p className="font-normal text-gray-600 leading-8">
            Over the past few years, I’ve had the opportunity to intern at leading companies, gaining invaluable hands-on experience in both AI/ML and Data Engineering. I am proficient in various programming languages such as Python, SQL, and C, and have a deep understanding of Machine Learning frameworks like TensorFlow and PyTorch. I have experience in handling large datasets using PySpark, conducting data visualizations with PowerBI, Tableau, and Matplotlib, and developing scalable applications with Django, Flask, and MySQL. I’m well-versed in cloud services, particularly AWS, where I’ve utilized tools like S3, Lambda, and EC2 to build robust and cost-efficient solutions.
            </p>
            <p className="font-normal text-gray-600 leading-8">
            I’ve had the privilege of serving as the Chairperson of DJS-Compute, leading a team of 20+ experienced mentors to guide over 60 students in building projects in Machine Learning, Web Development, and App Development. I’ve also had the honor of serving as an Academic Mentor at the We Can We Will Foundation, helping underprivileged students achieve their academic goals.
            </p>
            <p className="font-normal text-gray-600 leading-8">
            I am always eager to collaborate on challenging and impactful projects. Whether it's AI, Machine Learning or Data engineering, I am enthusiastic about contributing to the tech community while continually expanding my knowledge. Feel free to reach out via LinkedIn or check out my projects on GitHub!
            </p>
        </section>
      </main>
    </div>
    <Footer/>
    </>
  );
}
