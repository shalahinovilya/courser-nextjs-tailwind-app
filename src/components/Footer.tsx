import React from "react"
import Image from "next/image"
import FooterLogo from "@/assets/footer-logo.png"
import { ArrowRightIcon } from "@/components/Icons/ArrowRightIcon"
import { GeoIcon } from "@/components/Icons/GeoIcon"
import { MailIcon } from "@/components/Icons/MailIcon"
import { PhoneIcon } from "@/components/Icons/PhoneIcon"
import Link from "next/link"
import Facebook from "@/assets/Footer/facebook.svg"
import Twitter from "@/assets/Footer/twitter.svg"
import Instagram from "@/assets/Footer/instagram.svg"
import Linkedin from "@/assets/Footer/linkedin.svg"
import Union from "@/assets/Footer/union.svg"

export const Footer = () => {
  return (
    <div className="bg-darkCerulean w-full flex justify-center">
      <div className="w-full max-w-[1360px] py-[67px] px-15">
        <div className="flex flex-col items-center gap-10 xl:grid xl:grid-cols-2">
          <div className="flex flex-col items-center xl:items-start max-w-[550px]">
            <Image src={FooterLogo} alt={"logo"} />
            <p className="text-white text-[14px] md:text-[18px] mb-10 mt-7 text-center xl:text-start">
              Let Us build your career together Be the first person to transform yourself with our unique & world class
              corporate level trainings.
            </p>
            <p className="font-semibold text-[21px] md:text-[30px] mb-6 text-white">Subscribe Our Newsletter</p>
            <div className="flex">
              <input
                className="w-[200px] md:w-[400px] text-opacity-70 border-opacity-40 pr-5 h-[70px] text-xl text-white bg-transparent focus:outline-0 border-b"
                placeholder="Your Email address"
                type="text"
              />
              <button className="h-[70px] flex items-center justify-center bg-gerberaRed px-6 rounded-t-2xl border-b border-opacity-40">
                <ArrowRightIcon />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start md:flex-row gap-y-9 md:gap-y-0 md:gap-x-9">
            <div className="flex flex-col max-w-[300px] md:mr-11 text-center xl:text-start">
              <p className="font-semibold text-[38px] mb-4">
                <span className="text-white">Quick</span> <span className="text-gerberaRed">Links</span>
              </p>
              <ul className="flex flex-col text-white text-[14px] md:text-[18px] font-normal">
                <li className="transition duration-300 ease-in-out hover:underline">
                  <Link href="">Home</Link>
                </li>
                <li className="transition duration-300 ease-in-out hover:underline">
                  <Link href="story">Our Story</Link>
                </li>
                <li className="transition duration-300 ease-in-out hover:underline">
                  <Link href="best-courses">Best Courses</Link>
                </li>
                <li className="transition duration-300 ease-in-out hover:underline">
                  <Link href="faq">FAQ’s</Link>
                </li>
                <li className="transition duration-300 ease-in-out hover:underline">
                  <Link href="cancellation">Cancellation & Refunds</Link>
                </li>
                <li className="transition duration-300 ease-in-out hover:underline">
                  <Link href="contact">Contact US</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-8 max-w-[380px] text-center xl:text-start">
              <p className="font-semibold text-[38px] ">
                <span className="text-white">Contact</span> <span className="text-gerberaRed">Us</span>
              </p>
              <div className="flex gap-x-4 justify-center xl:justify-start">
                <div className="shrink-0">
                  <GeoIcon />
                </div>
                <p className="text-white text-[14px] md:text-[18px]">
                  Navakethan Complex, 6th Floor, 605, 606 A&P opp, CLock Tower, SD Road, Secunderabad, Telangana 500003
                </p>
              </div>
              <div className="flex gap-x-4 justify-center xl:justify-start">
                <div className="shrink-0">
                  <MailIcon />
                </div>
                <p className="text-white text-[14px] md:text-[18px]">info@ezyskills.in</p>
              </div>
              <div className="flex gap-x-4 justify-center xl:justify-start">
                <div className="shrink-0">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-white text-[14px] md:text-[18px]">+91 8428448903</p>
                  <p className="text-white text-[14px] md:text-[18px]">+91 9475484959</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-y-4 xl:flex-row xl:justify-between mt-[40px]">
          <div className="flex text-white gap-12">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/policy">Privacy Policy</Link>
          </div>
          <div className="flex gap-5 text-white items-center">
            <a href="/facebook">
              <Image src={Facebook} alt="facebook" />
            </a>
            <a href="/twitter">
              <Image src={Twitter} alt="twitter" />
            </a>
            <a href="/instagram">
              <Image src={Instagram} alt="instagram" />
            </a>
            <a href="/linkedin">
              <Image src={Linkedin} alt="linkedin" />
            </a>
            <a href="/union">
              <Image src={Union} alt="union" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
