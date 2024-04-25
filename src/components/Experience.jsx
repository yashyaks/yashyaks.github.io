import React from 'react'

export default function Experience() {
  return (
    <div>
        {/* <!-- Testimonials --> */}
<div className="relative overflow-hidden">
  <div className="max-w-[75rem] px-8 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
  <div className='font-Poppins block text-5xl font-bold text-gray-800 lg:text-4xl xl:text-6xl lg:leading-tight text-white mb-8'>Experience</div>
    {/* <!-- Grid --> */}
    <div className="lg:grid lg:grid-cols-6 lg:gap-16 lg:items-center">
      <div className=" lg:block lg:col-span-2">
        <img className="rounded-xl" src="src/assets/IMG_20231107_125658.jpg" alt="Image Description"/>
      </div>

      
      {/* <!-- End Col --> */}

      <div className="lg:col-span-4">
        {/* <!-- Blockquote --> */}
        <blockquote>
            {/* <!-- LOGO--!> */}
            <img src="./src/assets/lawyantra-color-dark.svg" alt="Description" class="w-40 h-7 mt-2 mb-2" />

            <p className="font-Poppins text-md mb-5 text-white-400 lg:text-lg">
              AI/ML and Back-end Intern
            </p>
            <ul className="text-md text-justify font-Poppins text-white-800 lg:text-lg list-disc">
              <li>Introduced 60+ subcategories for automated case classification in Lawyantra's AI platform.</li>
              <li>Spearheaded the development of a Lawyer Ranking System architecture.</li>
              <li>Integrated the solutions with the Django REST framework and implemented AWS S3 for file storage.</li>
              <li>Implemented custom admin panel APIs using Django REST Framework, on a MySQL database.</li>
            </ul>

        </blockquote>
        {/* <!-- End Blockquote --> */}
      </div>
      {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}
  </div>
</div>
{/* <!-- End Testimonials --> */}
    </div>
  )
}
