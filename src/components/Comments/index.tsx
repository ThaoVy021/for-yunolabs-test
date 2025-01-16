"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import "./style.scss"

const Comments = () => {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
      name: "Name Surname",
      position: "Position, Company name",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
      name: "Name Surname",
      position: "Position, Company name",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
      name: "Name Surname",
      position: "Position, Company name",
    },
  ]

  return (
    <section className="py-10 bg-[#fdf2e9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-bold"
            style={{ color: "rgba(67, 67, 67, 1)" }}
          >
            Don’t just take our word for it
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          className=" customeSwiper"
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{
            clickable: true,
            el: ".pagination",
          }}
          loop
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className=" text-center max-w-3xl mx-auto ">
                <p className="text-base text-gray-600 mb-6">
                  “{testimonial.quote}”
                </p>
                <h3 className="text-lg font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination flex justify-center mt-6"></div>
      </div>
    </section>
  )
}

export default Comments
