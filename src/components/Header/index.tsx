"use client"
import { useState, useEffect } from "react"

import Image from "next/image"
import LogoBlack from "@/assets/images/logoBlack.png"
import Facebook from "@/assets/icons/Facebook.svg"
import Instagram from "@/assets/icons/Instagram.svg"
import Tiktok from "@/assets/icons/Tiktok.svg"
import Youtube from "@/assets/icons/Youtube.svg"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      // Clean up the class on unmount
      document.body.classList.remove("overflow-hidden")
    }
  }, [menuOpen])

  return (
    <header className="relative bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Image src={LogoBlack} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Center Toggle Button */}
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="rgba(67, 67, 67, 1)"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="rgba(67, 67, 67, 1)"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* "Book Now" Button */}
        <a
          href="#book-now"
          className="hidden md:inline-block bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-full shadow hover:bg-gray-600 transition"
        >
          Book Now
        </a>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`fixed z-50 mt-20 inset-0 bg-gray-100 transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Navigation Links */}
          <nav className="grid grid-cols-2 gap-8 text-left text-xl font-medium text-gray-700 w-1/2">
            <a href="#home" className="textColor:secondary hover:text-gray-900">
              Home
            </a>
            <a href="#treatments" className="hover:text-gray-900">
              Treatments
            </a>
            <a href="#blog" className="hover:text-gray-900">
              Blog
            </a>
            <a href="#shop" className="hover:text-gray-900">
              Shop
            </a>
            <a href="#concerns" className="hover:text-gray-900">
              Concerns
            </a>
            <a href="#locate-us" className="hover:text-gray-900">
              Locate Us
            </a>
          </nav>

          {/* Footer Icons */}
          <div className="absolute bottom-6 left-0 mx-16 w-full text-end container mx-auto ">
            <div className="flex justify-end space-x-4 mx-16">
              <a href="#">
                <Image
                  src={Facebook}
                  alt="Facebook"
                  className="filter invert-[0.5] sepia contrast-[2] brightness-[1.2] hue-rotate-[90deg]"
                />
              </a>
              <a href="#">
                <Image
                  src={Instagram}
                  alt="Instagram"
                  className="filter invert-[0.5] sepia contrast-[2] brightness-[1.2] hue-rotate-[90deg]"
                />
              </a>
              <a href="#">
                <Image
                  src={Tiktok}
                  alt="Tiktok"
                  className="filter invert-[0.5] sepia contrast-[2] brightness-[1.2] hue-rotate-[90deg]"
                />
              </a>
              <a href="#">
                <Image
                  src={Youtube}
                  alt="Youtube"
                  className="filter invert-[0.5] sepia contrast-[2] brightness-[1.2] hue-rotate-[90deg]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
