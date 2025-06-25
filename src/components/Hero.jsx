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
          <ul className="ml-5 list-disc text-white">
        <li>
          I am an Aspiring Data Scientist with a B.Tech in Computer Science & Engineering - Data Science (Honors in Computational Finance). 
        </li>
        <li>
          I have Gained hands-on experience in data engineering at PaywithRing, developed Python scripts for ETL pipelines, enhanced production grade tools and also gained hands-on experience with AWS services. 
        </li>
        <li>
          Applied AI/ML concepts to real-world problems at Lawyantra, including automated case classification and lawyer ranking systems and handling deployment to Django REST Framework with relational databases. 
        </li>
        <li>
          Ranked in Top 20 at TIAA AI T3 Hack Hackathon.
        </li>
        <li>
          Research Work Published in IEEE Xplore.
        </li>
        <li>
          Demonstrated leadership and mentorship skills as Chairperson of DJSCE Compute.
        </li>
        </ul>
      </section>
      </main>
    </div>
    <Footer/>
    </>
  );
}
