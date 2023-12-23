import React from 'react'

export default function Work1() {
return (
    <div>
        {/* <!-- Card Blog --> */}
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Title --> */}
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-Alice font-bold md:text-6xl md:leading-tight text-white">About Me</h2>
    <p class="mt-1 font-Poppins text-white-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, laborum.</p>
  </div>
  {/* <!-- End Title -->

  <!-- Grid --> */}
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
   {/*<!-- Card --> */}
    {/* <a class="group relative flex flex-col w-full  min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg border-2 border-risd_blue-400" href="#">
      <div class="flex-auto p-4 md:p-6">
        <h3 class="text-xl text-white/[.9] group-hover:text-white"><span class="font-bold">Preline</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus cupiditate alias ratione ex fugiat consectetur deserunt, sunt modi consequatur, illum velit deleniti. Cum ea distinctio alias, placeat cumque laborum impedit unde nostrum officia minus accusamus magni accusantium quaerat quam dignissimos repellat sunt dicta iure perspiciatis. Voluptates animi sit debitis temporibus eveniet accusamus molestias, numquam est optio ipsa nesciunt itaque quasi ea nulla deserunt eum molestiae.</h3>
      </div>
    </a> */}
    {/* <!-- End Card --> */}

        <div className="grid grid-rows-2  rounded-full ">
            <div className='bg-risd_blue-400 w-52 h-52 rounded-full'> </div>
            <div className='bg-risd_blue-400 ml-48 w-52 h-52 rounded-full'></div>

        </div>



    {/* <!-- Card --> */}
    <a class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img class="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="Image Description"/>
        <span class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
          Sponsored
        </span>
      </div>

      <div class="mt-7">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Studio by Preline
        </h3>
        <p class="mt-3 text-gray-800 dark:text-gray-200">
          Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
        </p>
        <p class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Read more
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
    {/* <!-- End Card -->

    <!-- Card --> */}
    <a class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img class="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
      </div>

      <div class="mt-7">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Onsite
        </h3>
        <p class="mt-3 text-gray-800 dark:text-gray-200">
          Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
        </p>
        <p class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Read more
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
    {/* <!-- End Card -->*/}


  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Blog --> */}
    </div>
  )
}
