import React from 'react'

export default function Navbar() {
  return (
    <>
<header className=" max-w-[85rem] items-center mx-auto text-sm">
  <nav className=" w-full mx-auto px-4 py-6 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
    <div className="flex items-center justify-between">
      <a className="flex-none text-2xl font-Poppins text-white  link link-underline link-underline-black" href="#" aria-label="Brand">
        🤖 yashyaks
      </a>
      {/* <a className="flex-none text-xl font-bold text-black" href="#" aria-label="Brand">Yash Thakar</a> */}
      {/* <div className="sm:hidden">
        <button type="button" className="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-black/0 text-black hover:border-white/100 disabled:opacity-0 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end text-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
        {/* NAV ITEMS */}
        {/* <a className="font-semibold text-black hover:bg-cosmic_latte-400 p-2 rounded-lg" href="#" aria-current="page">
          <text className='hover:text-risd_blue'>Landing</text>
        </a>
        <a className="font-semibold text-black hover:bg-cosmic_latte-400 p-2 rounded-lg" href="#" aria-current="page">
          <text className='hover:text-risd_blue'>Landing</text>
        </a>
        <a className="font-semibold text-black hover:bg-cosmic_latte-400 p-2 rounded-lg" href="#" aria-current="page">
          <text className='hover:text-risd_blue'>Landing</text>
        </a>
        <a className="font-semibold text-black hover:bg-cosmic_latte-400 p-2 rounded-lg" href="#" aria-current="page">
          <text className='hover:text-risd_blue'>Landing</text>
        </a> */} 



        {/* DROPDOWN */}
        {/* <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
          <button type="button" className="flex items-center w-full text-white/[.8] hover:text-white font-medium">
            Dropdown
        
            <svg className="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>

          <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              About
            </a>
            <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
              <button type="button" className="w-full flex justify-between w-full items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Sub Menu
                <svg className="sm:-rotate-90 flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>

              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  About
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  Downloads
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  Team Account
                </a>
              </div>
            </div>

            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Downloads
            </a>
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Team Account
            </a>
          </div>
        </div> */}
        {/* <button type="button" className=" w-20 h-9 bg-blue-600 rounded-lg flex justify-center items-center gap-x-2 font-normal  border border-black/0 text-black hover:border-blue/100 disabled:opacity-0  dark:focus:outline-none  dark:focus:ring-blue-600">
        <a className="" href="#">
        Resume
        </a>
        </button> */}
      {/* </div> */}
    </div>
  </nav>
</header>
    </>

// flex bg-blue-600 items-center gap-x-2 font-medium text-black/[.8] hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6
  )
}
