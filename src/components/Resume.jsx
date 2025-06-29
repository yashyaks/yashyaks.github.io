import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaHashnode } from "react-icons/fa6";
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Hero() {
  return (
    <>
      <Navbar />
      <div className="max-w-[80rem] font-Poppins w-full mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col lg:flex-row">
        <Sidebar />
        <main className="border-2 rounded-lg border-gray w-full lg:w-3/4 p-4 sm:p-8">
          
          {/* Education Section */}
          <h1 className="border-b-2 border-b-gray text-2xl font-semibold sm:text-3xl mb-6">
            Education
          </h1>
          <section className='mb-6'>
            <div className="flex flex-col sm:flex-row justify-between font-medium text-lg text-white">
              <h2>B.Tech Computer Science & Engineering - Data Science</h2>
              <p className="text-sm sm:text-lg">2025</p>
            </div>
            <p className='text-white'>Honors in Computational Finance</p>
            <p className='text-white'>DJSCE, University of Mumbai (CGPA: 8.36)</p>
          </section>
          <section className='mb-6'>
            <div className="flex flex-col sm:flex-row justify-between font-medium text-lg text-white">
              <h2>HSC, 12th Board Examination</h2>
              <p className="text-sm sm:text-lg">2021</p>
            </div>
            <p className='text-white'>Nirmala Memorial Foundation Junior College (96.5%)</p>
          </section>
          <section className='mb-6'>
            <div className="flex flex-col sm:flex-row justify-between font-medium text-lg text-white">
              <h2>SSC, 10th Board Examination</h2>
              <p className="text-sm sm:text-lg">2019</p>
            </div>
            <p className='text-white'>Thakur Vidya Mandir High School (93.2%)</p>
          </section>

          {/* Experience Section */}
          <h1 className="border-b-2 border-b-gray text-2xl sm:text-3xl font-semibold mb-6">
            Experience
          </h1>

          {/* Data Engineering Intern */}
          <section className='mb-6'>
            <div className="flex flex-col sm:flex-row justify-between font-medium text-lg text-white">
              <h2>Data Engineering Intern, Pay with Ring</h2>
              <p className="text-sm sm:text-lg">Jun 2024 - Aug 2024</p>
            </div>
            <ul className="ml-5 list-disc text-white">
              <li>Developed Python scripts to facilitate the migration of an existing data warehouse from Snowflake to ClickHouse.</li>
              <li>Enhanced a production-grade tool with AWS Lambda Functions, improving error handling and operational efficiency.</li>
              <li>Implemented a scheduled AWS Lambda function with Airflow to manage a proof-of-concept warehousing cluster, reducing off-hour operational costs.</li>
            </ul>
          </section>

          {/* AI/ML and Back-end Intern */}
          <section className='mb-6'>
            <div className="flex flex-col sm:flex-row justify-between font-medium text-lg text-white">
              <h2>AI/ML and Back-end Intern, Lawyantra</h2>
              <p className="text-sm sm:text-lg">Nov 2023 - Feb 2024</p>
            </div>
            <ul className="ml-5 list-disc text-white">
              <li>Introduced 60+ subcategories for automated case classification in Lawyantra's Gen-AI platform.</li>
              <li>Developed a Lawyer Ranking System architecture and integrated it with the Django REST framework and MySQL.</li>
              <li>Migrated the company's file storage system from AWS EC2 instance store to AWS S3, mitigating data loss risks.</li>
            </ul>
          </section>

          {/* Awards and Achievements */}
          <h1 className="border-b-2 border-b-gray text-2xl sm:text-3xl font-semibold mb-6">
            Achievements
          </h1>
          <div className='mb-6'>
            <h2 className="text-lg font-medium text-white">Top 20 in Retirement Industry AI Hackathon: T3 Hack, TIAA</h2>
            <p>
              Our team reached the semifinals and achieved a Top-20 ranking nationally at the Retirement Industry AI Hackathon: T3 Hack, a national-level competition organised by TIAA with over 2000 participants.
            </p>
            </div>
            <div className='mb-6'>
            <h2 className="text-lg font-medium text-white">Research Published in IEEE Xplore</h2>
            <p>
            We presented a paper titled “Performance Analysis of Hybrid Quantum-Classical Convolutional Neural Networks for Audio Classification” at 15th ICCCNT, IIT Mandi, in which we developed a QC-CNN architecture to perform audio classification using mel-spectrograms and achieved comparative performance with classical models.

            </p>
          </div>

          {/* Certifications */}
          <h1 className="border-b-2 border-b-gray text-2xl sm:text-3xl font-semibold mb-6">
            Certifications
          </h1>
          <ul className="ml-5 mb-6 list-disc text-white">
            <li>Fundamentals of Accelerated Computing with CUDA Python, NVIDIA</li>
            <li>AWS Academy Cloud Architecting</li>
            <li>AWS Academy Data Engineering</li>
            <li>AWS Academy Machine Learning Foundations</li>
            <li>AWS Academy Cloud Foundations</li>
            <li>Google Cloud Career Practitioner, Google Cloud Skills Boost</li>
            <li>Fundamentals of Quantitative Modelling, Coursera</li>
            <li>Python for Data Science, AI and Development, Coursera</li>
          </ul>

          {/* Volunteering */}
          <h1 className="border-b-2 border-b-gray text-2xl sm:text-3xl font-semibold mb-6">
            Volunteering
          </h1>
          <section className='mb-6'>
            <div className="flex flex-col sm:flex-row justify-between font-medium text-lg text-white">
              <h2>Chairperson, DJS-Compute</h2>
              <p className="text-sm sm:text-lg">Jun 2023 - Jun 2024</p>
            </div>
          </section>

          <section className='mb-6'>
            <div className="flex flex-col sm:flex-row justify-between font-medium text-lg text-white">
              <h2>Academic Mentor, We Can We Will Foundation</h2>
              <p className="text-sm sm:text-lg">Jun 2023 - Aug 2024</p>
            </div>
          </section>

          {/* Download Resume Button
          <div className='flex justify-center items-center'>
            <a
              href="/Yash Thakar Resume.pdf"
              download
              className="max-w-xs mt-4 bg-blue text-white font-medium px-4 py-2 rounded-lg border-2 border-blue hover:bg-blue hover:border-2 hover:border-white transition duration-300"
            >
              Download Resume
            </a>
          </div> */}
        </main>
      </div>
      <Footer />
    </>
  );
}
