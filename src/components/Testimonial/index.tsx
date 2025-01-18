import Image from "next/image"
import Testimonial1 from "@/assets/images/testimonial1.png"
import Testimonial2 from "@/assets/images/testimonial2.png"

const Testimonial = () => {
  return (
    <section className="container mx-auto py-10 px-4 max-w-full sm:px-6 lg:px-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Card 1 */}
        <div className="relative p-6 border border-gray-400 border-r-0 rounded-bl-[60px] bg-white shadow-sm flex flex-col">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            Specialise in non-surgical corrective and cosmetic treatments
          </h2>
          <div className="flex items-center justify-between flex-row-reverse">
            <Image
              src={Testimonial1}
              alt="Non-surgical treatments"
              className="w-36 h-32 rounded-lg object-cover"
            />

            <span className="text-4xl font-medium text-gray-400">1</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative p-6 border border-gray-400 border-r-0 rounded-bl-[60px] bg-white shadow-sm flex flex-col mt-6 md:mt-0">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            Option between In-Clinic and Virtual Consultation
          </h2>
          <div className="flex items-center justify-between flex-row-reverse">
            <Image
              src={Testimonial2}
              alt="Non-surgical treatments"
              className="w-36 h-32 rounded-lg object-cover object-top"
              // objectFit="cover"
            />
            <span className="text-4xl font-medium text-gray-400">2</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
