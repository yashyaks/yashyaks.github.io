import React from 'react';

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="max-w-[75rem] w-full mx-auto px-8 py-6 mb-6 flex justify-between items-center">
          <div className="flex items-center">
            <a className="flex items-center text-2xl font-Poppins text-white link link-underline link-underline-black" href="#">
              <img src="./public/emoji_robot.svg" alt="Description" className="w-8 h-8 mb-2 mr-5" />
              <span>yashyaks</span>
            </a>
          </div>
          <div>
            <a className="flex items-center text-2xl font-Poppins text-white link link-underline link-underline-black" href="https://yashyaks.hashnode.dev/">
              <img src="./public/blog.png" alt="Description" className="w-8 h-8 mb-2 mr-5" />
              <span>Blog</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}