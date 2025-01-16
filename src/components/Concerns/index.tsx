"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"

import Gallery1 from "@/assets/images/gallery1.png"
import Gallery2 from "@/assets/images/gallery2.png"
import Gallery3 from "@/assets/images/gallery3.png"
import Gallery4 from "@/assets/images/gallery4.png"
import Gallery5 from "@/assets/images/gallery5.png"
import Gallery6 from "@/assets/images/gallery6.png"
import Gallery7 from "@/assets/images/gallery7.png"
import Gallery8 from "@/assets/images/gallery8.png"
import Gallery9 from "@/assets/images/gallery9.png"

import "./style.scss"

const Concerns = () => {
  const concerns = [
    { title: "Facial Anti-Ageing", img: Gallery1 },
    { title: "Acne Scarring & Acne Clearance", img: Gallery2 },
    {
      title: "Melasma, Pigmentation & Freckles",
      img: Gallery3,
    },
    { title: "Rosacea", img: Gallery4 },
    { title: "Moles, Skin Tags & Lumps", img: Gallery5 },
    { title: "Surgical & Burns Scars", img: Gallery6 },
    { title: "Stretch Marks", img: Gallery7 },
    { title: "Laser Tattoo Removal", img: Gallery8 },
    { title: "Spider Veins", img: Gallery9 },
  ]

  return (
    <section className="py-10 bg-white max-w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="flex flex-col gap-y-6 text-start mb-6">
          <h2 className="text-4xl font-medium text-gray-800">Concerns</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          className="concernSwiper"
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={3}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {concerns.map((concern, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-lg">
                <Image
                  src={concern.img}
                  alt={concern.title}
                  className="w-full object-cover rounded-md"
                  style={{ height: "450px" }}
                />
                <h3 className="absolute text-lg  font-normal text-white bottom-9 left-8">
                  {concern.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center mt-6"></div>

        <div className="absolute bottom-4 right-4 flex items-center space-x-4">
          {/* Previous Arrow */}
          <button className="custom-prev bg-gray-300 p-2 rounded-full shadow hover:bg-gray-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Arrow */}
          <button className="custom-next bg-gray-300 p-2 rounded-full shadow hover:bg-gray-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Concerns
