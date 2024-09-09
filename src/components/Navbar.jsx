import React from 'react';

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="max-w-[85rem] w-full mx-auto px-8 py-6 mb-6 flex justify-between items-center">
            <a className="flex items-center text-2xl font-Poppins text-white link link-underline link-underline-black" href="#">
              <img src="/emoji_robot.svg" alt="Description" className="w-8 h-8 mb-1 mr-4" />
              <span>yashyaks</span>
            </a>
        </nav>
      </header>
    </>
  );
}