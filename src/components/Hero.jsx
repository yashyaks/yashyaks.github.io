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
        <section className='mb-6'>
          <h2 className="font-medium text-lg sm:text-xl text-blue-600">
            Hello I am Yash Thakar <span className="text-2xl">👋</span>
          </h2>
          <p className="font-normal text-gray-600 leading-loose">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Varius neque porta nascetur finibus, lorem turpis. Arcu vehicula eleifend nibh, lacinia accumsan hendrerit? Viverra scelerisque porttitor praesent malesuada sed purus justo praesent proin. At cursus sodales diam, leo dignissim ornare. Sem magna euismod himenaeos semper facilisi. Nam ac consequat, ut class platea et. Senectus lacinia dis posuere nisl ac donec aenean.
          </p>
          <p className="font-normal text-gray-600 leading-loose">
          At turpis est senectus consectetur ipsum turpis. Et ridiculus viverra mattis sem nisl libero phasellus. Imperdiet mattis in; suscipit augue dis viverra cras. Vestibulum dapibus turpis morbi mauris amet placerat maximus. Interdum ultrices mollis suspendisse sit nascetur; adipiscing donec vulputate. Lacus dictum bibendum platea fusce eleifend. Imperdiet nascetur mattis dignissim ultrices nascetur gravida sem.
          </p>
          <p className="font-normal text-gray-600 leading-loose">
          Semper hendrerit lacus montes dignissim arcu. Venenatis mus in dui vehicula venenatis sagittis. Feugiat magnis sodales magna pulvinar quis. Tellus tempus venenatis habitasse rutrum facilisi bibendum porta pretium id. Nostra ultrices ipsum lacus consequat natoque sagittis senectus diam. Parturient condimentum feugiat varius sodales neque leo. Donec ipsum imperdiet lobortis maximus velit.
          </p>

        </section>
      </main>
    </div>
    <Footer/>
    </>
  );
}
