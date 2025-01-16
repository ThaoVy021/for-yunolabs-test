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
      <div className="container flex gap-8 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center  border-0 pb-6 mb-6">
          <div className="mb-6 md:mb-0">
            <span>
              <Image src={LogoWhite} alt="Logo" className="h-12 w-auto" />
            </span>

            <nav className="text-center mt-14">
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

        <div className="flex flex-wrap text-sm text-gray-400">
          <div>
            <p className="mb-4" style={{ fontSize: 12 }}>
              CONTACT US
            </p>
            <p className="font-semibold text-2xl">+02 8006 3344</p>
          </div>

          <div className="mb-6 md:mb-0">
            <p className="mb-4" style={{ fontSize: 12 }}>
              EMAIL
            </p>
            <p className="font-semibold">robert@cosmedixclinics.com.au</p>
          </div>
        </div>
        <div className="flex flex-wrap flex-col justify-between text-sm text-gray-400">
          <div>
            <p className="mb-4" style={{ fontSize: 12 }}>
              ADDRESS
            </p>
            <p className="font-semibold">169 William Street - Darlinghurst</p>
            <p className="font-semibold">Sydney, NSW</p>
          </div>
          <div>
            <p className="mb-4" style={{ fontSize: 12 }}>
              OPENING HOURS
            </p>
            <p className="font-semibold text-2xl">9am—6pm</p>
          </div>
          <div className="flex space-x-4 h-4">
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

        <div className="flex flex-wrap flex-col-reverse text-gray-400">
          <div style={{ fontSize: 8, textWrap: "nowrap" }}>
            © 2024 — COPYRIGHT
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
