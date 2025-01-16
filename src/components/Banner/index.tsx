import Image from "next/image"
import HomeBanner from "@/assets/images/homeBanner.jpeg" // Adjust the import path

const Banner = () => {
  return (
    <section className="relative h-screen flex items-end mt-26">
      <div className="absolute inset-0">
        <Image
          src={HomeBanner}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 py-12  sm:px-6 lg:px-8 text-white">
        {/* Text Content */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-medium mb-4 leading-tight ">
            Unveil Your Best Self with Cosmedix Clinics' Expert Care <br />
            and Cutting-Edge Treatments
          </h1>
          <button className="inline-block bg-transparent text-white text-sm font-medium px-6 py-2 rounded-full border-2 border-white shadow hover:bg-gray-200 hover:text-black transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner
