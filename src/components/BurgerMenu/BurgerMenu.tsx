import { useState } from "react"
import Close from "@/assets/Courses/close-black.svg"
import { BurgerMenuIcon } from "@/components/Icons/BurgerMenuIcon"
import Image from "next/image"
import Link from "next/link"

interface INavigation {
  id: number
  name: string
  route: string
}

interface IProps {
  navigation: INavigation[]
}

export default function BurgerMenu({ navigation }: IProps) {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <button className="lg:hidden ml-auto w-8" onClick={() => setOpen(true)}>
        <BurgerMenuIcon />
      </button>
      {open && (
        <div className="fixed bg-white shadow-lg z-[100000] top-0 right-0 w-[300px] h-full">
          <div className="flex w-full px-6 pt-4 justify-end">
            <button onClick={() => setOpen(false)}>
              <Image src={Close} width={32} height={32} alt="remove category" />
            </button>
          </div>
          <div className="flex flex-col p-4 pt-0">
            {navigation.map(navItem => (
              <Link
                onClick={() => setOpen(false)}
                key={navItem.id}
                className={`text-slateGray p-4 transition duration-300 ease-in-out hover:text-white 
            hover:bg-slateGray`}
                href={navItem.route}>
                {navItem.name}
              </Link>
            ))}
          </div>
          <div className="flex-col flex gap-4 p-4 pt-0 pl-8">
            <button
              onClick={() => setOpen(false)}
              className={`border-2 border-gerberaRed text-gerberaRed font-semibold rounded-lg w-[155px] h-12 2xl:w-[183px] 2xl:h-[60px]`}>
              Log In
            </button>
            <button
              onClick={() => setOpen(false)}
              className={`bg-gerberaRed font-semibold rounded-lg w-[155px] h-12 2xl:w-[183px] 2xl:h-[60px] text-lightGray `}>
              Create Account
            </button>
          </div>
        </div>
      )}
    </>
  )
}
