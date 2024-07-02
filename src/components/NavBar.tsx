import React from "react"
import Link from "next/link"
import Image from "next/image"
import { poppins } from "@/styles/font"
import { useRouter } from "next/router"
import BurgerMenu from "./BurgerMenu/BurgerMenu"

const navigation = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Course Selector",
    route: "/choose-course",
  },
  {
    id: 3,
    name: "Courses",
    route: "/courses",
  },
]

export const NavBar = () => {
  const { asPath } = useRouter()

  const hasBg = asPath.includes("faq") || asPath.includes("/courses/")

  return (
    <header className={`${poppins.className} mt-8 sm:mt-14 2xl:mt-16 relative z-100`}>
      <div className="flex items-center px-6 sm:px-12 xl:px-16 gap-x-8">
        <div className="flex">
          {/* Logo */}
          <Link href="/">
            <Image
              className=" mr-7 xl:mr-10 w-[140px] h-[60px]  md:w-[180px] md:h-[86px] 2xl:w-[248px] 2xl:h-[118px] 2xl:mr-16"
              src={"/logo.svg"}
              width={248}
              height={118}
              alt={"logo"}
            />
          </Link>

          {/*Nav Menu */}
          <div className="hidden lg:flex items-center gap-x-7 xl:gap-x-10 2xl:gap-x-14">
            {navigation.map(navItem => (
              <Link key={navItem.id} className={`text-${hasBg ? "white" : "slateGray"}`} href={navItem.route}>
                {navItem.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Auth */}
        <div className="ml-auto hidden lg:flex gap-x-6 xl:gap-x-8 2xl:gap-x-14">
          <button
            className={`border-2 border-${hasBg ? "white" : "gerberaRed"} text-${hasBg ? "white" : "gerberaRed"} font-semibold rounded-lg w-[155px] h-12 2xl:w-[183px] 2xl:h-[60px]`}>
            Log In
          </button>
          <button
            className={`bg-${hasBg ? "white" : "gerberaRed"} font-semibold rounded-lg w-[155px] h-12 2xl:w-[183px] 2xl:h-[60px] text-${hasBg ? "black" : "lightGray"} `}>
            Create Account
          </button>
        </div>

        <BurgerMenu navigation={navigation} />
      </div>
    </header>
  )
}
