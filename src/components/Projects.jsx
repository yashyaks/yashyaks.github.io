import React from 'react'
import { data } from "./constants";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IoMdOpen } from "react-icons/io";
import '../index.css'
//align responsiveness of this sectiono with the rest of the page
//handle overflow issue in description

export default function Projects
() {
    var settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0, 
        speed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
  return (
    <div className='max-w-[70rem] m-auto'>
        <div className='mt-20'>
          <div className='text-left font-Poppins text-5xl md:text-7xl mb-8 ml-8'>
            Projects
          </div>
            <Slider {...settings}>
            {data.map((d) => (
                <div className='m-auto bg-[#0000] h-[450px] text-white rounded-xl'>
                    <div className='rounded-t-xl flex justify-center items-center overflow-hidden h-48 w-full'>
                        <img src={d.image} className='m-2 rounded-xl object-cover h-full w-full' />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 p-4'>
                        <p className='text-2xl text-center font-Poppins font-bold link link-block link-block-black'>{d.title}</p>
                        <p className='text-base mx-auto font-Poppins text-center'>{d.content}</p>
                        <a className="py-3 px-4 m-auto inline-flex justify-center items-center gap-x-2 text-lg font-Quicksand font-black rounded-lg bg-risd_blue-400 text-white hover:bg-gradient-to-tr from-risd_blue-300 via-risd_blue-400 to-risd_blue-800" target="_blank" href={d.url}>
                          Github
                          <IoMdOpen />
                        </a>
                    </div>
                </div>
            ))}
            </Slider> 
        </div>

    </div>
  )
}
