"use client"
import { useState } from "react"
import Image from "next/image"
import LogoWhite from "@/assets/images/logoWhite.png"
import Facebook from "@/assets/icons/Facebook.svg"
import Instagram from "@/assets/icons/Instagram.svg"
import Tiktok from "@/assets/icons/Tiktok.svg"
import Youtube from "@/assets/icons/Youtube.svg"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container flex mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <span>
              <Image src={LogoWhite} alt="Logo" className="h-12 w-auto" />
            </span>

            {/* Navigation */}
            <nav className="text-center">
              <ul className="flex flex-wrap gap-4 text-sm text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#concerns" className="hover:text-white">
                    Concerns
                  </a>
                </li>
                <li>
                  <a href="#treatments" className="hover:text-white">
                    Treatments
                  </a>
                </li>
                <li>
                  <a href="#shop" className="hover:text-white">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#locate" className="hover:text-white">
                    Locate Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between items-start text-sm text-gray-400">
          <div>
            <div>
              <p className="mb-4 font-semibold">CONTACT US</p>
              <p>+02 8006 3344</p>
            </div>

            <div className="text-center mb-6 md:mb-0">
              <p className="mb-4 font-semibold">EMAIL</p>
              <p>robert@cosmedixclinics.com.au</p>
            </div>
          </div>

          <div>
            <div>
              <p className="mb-4 font-semibold">ADDRESS</p>
              <p>169 William Street - Darlinghurst</p>
              <p>Sydney, NSW</p>
            </div>

            <div className="text-center">
              <p className="mb-4 font-semibold">OPENING HOURS</p>
              <p>9am—6pm</p>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Image src={Facebook} alt="Facebook" className="h-4 w-auto" />
              </a>
              <a href="#" className="hover:text-white">
                <Image src={Instagram} alt="Instagram" className="h-4 w-auto" />
              </a>
              <a href="#" className="hover:text-white">
                <Image src={Tiktok} alt="Tiktok" className="h-4 w-auto" />
              </a>
              <a href="#" className="hover:text-white">
                <Image src={Youtube} alt="Youtube" className="h-4 w-auto" />
              </a>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center text-gray-400 text-sm">
            <div>© 2024 — COPYRIGHT</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
