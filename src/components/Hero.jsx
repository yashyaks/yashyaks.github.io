import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaHashnode } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="max-w-[80rem] font-Poppins w-full mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col lg:flex-row">
      {/* Sticky Sidebar */}
      <aside className="w-full lg:w-1/4 h-auto lg:sticky top-0 p-4 bg-gray-100 font-Poppins flex flex-col items-center">
        <img
          src="./src/assets/hero-square.jpg"
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

      {/* Main Content */}
      <main className="border-2 rounded-lg border-gray w-full lg:w-3/4 p-4 sm:p-8">
        <h1 className="border-b-2 border-b-gray text-2xl font-semibold sm:text-3xl mb-6">
        About Me
        </h1>
        <section className='mb-6'>
          <h2 className="font-medium text-lg sm:text-xl text-blue-600">
            Hello I am Yash Thakar
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
        <h1 className="border-b-2 border-b-gray text-2xl sm:text-3xl font-semibold mb-6">
        Skills
        </h1>

      </main>
    </div>
  );
}
