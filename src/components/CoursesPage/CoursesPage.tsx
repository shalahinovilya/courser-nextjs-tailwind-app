import { ICourse } from "@/interfaces/ICourse"
import CourseCard from "../CourseCard/CourseCard"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Search from "@/assets/Courses/search.svg"
import { useCourses } from "@/context/CoursesContext"
import Close from "@/assets/Courses/close.svg"
import Arrow from "@/assets/Courses/arrow.svg"

const ITEMS_PER_PAGE = 20
const sortList = ["all", "new", "old", "popular"]

const filterCourses = (courses: ICourse[], categories: string[]) => {
  if (categories.length === 0) {
    return courses
  }
  return courses.filter(course => categories.some(category => course.categories.includes(category)))
}

function createPagesArray(coursesCountPages: number) {
  return Array.from({ length: coursesCountPages }, (_, index) => index + 1)
}

export default function CoursesPage({ categoriesList, courses }: { categoriesList: string[]; courses: ICourse[] }) {
  const [page, setPage] = useState<number>(1)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const { categories, setCategories } = useCourses()
  const [openCategory, setOpenCategory] = useState<boolean>(false)
  const [openSort, setOpenSort] = useState<boolean>(false)
  const [sort, setSort] = useState<string>("all")
  const categoryRef = useRef<HTMLDivElement>(null)
  const sortRef = useRef<HTMLDivElement>(null)

  const handlePage = (page: number) => {
    setPage(page)
    sessionStorage.setItem("pageCourses", String(page))
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    sessionStorage.setItem("pageCourses", String(1))
    setPage(1) // Reset to the first page whenever search term changes
  }

  const filterByCategories = filterCourses(courses, categories)

  const filteredCourses = filterByCategories.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentCourses = filteredCourses.slice(startIndex, endIndex)
  const coursesCountPages = courses.length / 20
  const pagesArray = createPagesArray(Math.ceil(coursesCountPages))

  useEffect(() => {
    const pageSession = sessionStorage.getItem("pageCourses")
    if (pageSession) {
      setPage(+pageSession)
    }
  }, [])

  const inputRef = useRef<HTMLInputElement>(null)

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const removeCategory = (category: string) => {
    setCategories((categories: string[]) => [...categories.filter(categoryInList => categoryInList !== category)])
  }

  const openCategories = () => {
    setOpenCategory(!openCategory)
  }

  const onOpenSort = () => {
    setOpenSort(!openSort)
  }

  const onAddCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (categories.includes(e.currentTarget.value))
      setCategories([...categories.filter((category: string) => category !== e.currentTarget.value)])
    else {
      setCategories([...categories, e.currentTarget.value])
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
      setOpenCategory(false)
    }
  }

  const selectSort = (sortItem: string) => {
    setSort(sortItem)
    setOpenSort(false)
  }

  useEffect(() => {
    if (openCategory) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [openCategory])

  const handleClickOutsideSort = (event: MouseEvent) => {
    if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
      setOpenSort(false)
    }
  }

  useEffect(() => {
    if (openSort) {
      document.addEventListener("mousedown", handleClickOutsideSort)
    } else {
      document.removeEventListener("mousedown", handleClickOutsideSort)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSort)
    }
  }, [openSort])

  const sortCourses = (courses: ICourse[], sortKey: string) => {
    if (sortKey === "all") {
      return courses
    }
    return courses.slice().sort((a, b) => {
      switch (sortKey) {
        case "new":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case "old":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        case "popular":
          return b.boughtCount - a.boughtCount
        default:
          return 0
      }
    })
  }

  const sortedCourses = sortCourses(currentCourses, sort)

  return (
    <div className=" flex mt-[45px] w-full flex-col items-center">
      <div className="w-full px-[20px] flex items-center flex-col relative">
        <h1 className="text-darkCerulean pb-[45px] capitalize font-bold text-3xl sm:text-5xl lg:text-[60px] 2xl:text-[76px] leading-[106%]">
          Courses <span className="text-gerberaRed">List</span>
        </h1>
        <div className="py-[15px] grid grid-cols-1 lg:grid-cols-1fr3fr1fr gap-10 w-full">
          <div
            className="relative rounded-lg pl-[13px] pr-[46px] py-[9px] bg-[#F1F1F5] gap-3 flex cursor-pointer h-max"
            onClick={handleDivClick}>
            <Image src={Search} alt="search" />
            <input
              ref={inputRef}
              value={searchTerm}
              className="bg-[#F1F1F5] active:border-none focus:outline-none focus:ring-0"
              onChange={handleSearchChange}
              placeholder="Search The Course Here"
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="relative z-10" ref={categoryRef}>
              <button
                className="px-4 py-3 flex gap-2 border-2 border-gerberaRed  rounded-lg cursor-pointer items-center
                "
                onClick={openCategories}>
                <span>Select category</span>
                <Image
                  src={Arrow}
                  width={15}
                  height={15}
                  alt="select category"
                  className={`transition duration-300 ease-in-out ${openCategory ? "rotate-180" : ""}`}
                />
              </button>
              {openCategory && (
                <div className="absolute rounded-lg bg-white p-3 w-full">
                  {categoriesList &&
                    categoriesList.map(category => (
                      <div key={category} className="flex p-2 gap-2 items-center">
                        <input
                          value={category}
                          checked={categories.includes(category)}
                          onChange={onAddCategory}
                          type="checkbox"
                          className="cursor-pointer w-[15px] h-[15px]"
                        />
                        <span className="capitalize">{category}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>
            {categories &&
              categories.map((category: string) => (
                <div
                  key={category}
                  className="px-4 py-3 flex gap-2 border-2 border-gerberaRed  rounded-lg
                transition duration-300 ease-in-out hover:bg-gerberaRedLight capitalize h-max">
                  <span>{category}</span>
                  <button onClick={() => removeCategory(category)}>
                    <Image src={Close} width={15} height={15} alt="remove category" />
                  </button>
                </div>
              ))}
          </div>
          <div className="relative z-10 rounded-lg border-2 border-[#F1F1F5] flex h-max" ref={sortRef}>
            <div
              onClick={onOpenSort}
              className="text-[#696974] pl-[13px] py-[9px] border-r-2 border-[#F1F1F5] w-full min-h-[31px] gap-2 cursor-pointer">
              <span>Sort by:</span>
              <span className="text-[#44444F] capitalize ml-[5px]">{sort}</span>
            </div>
            <button className="px-[13px] py-[9px]" onClick={onOpenSort}>
              <Image
                src={Arrow}
                alt="search"
                width={20}
                height={20}
                className={`cursor-pointer transition duration-300 ease-in-out ${openSort ? "rotate-180" : ""}`}
              />
            </button>
            {openSort && (
              <div className="absolute top-[43px] rounded-lg bg-white w-full">
                {sortList &&
                  sortList.map(sortItem => (
                    <button
                      onClick={() => selectSort(sortItem)}
                      key={sortItem}
                      className="flex p-3 items-center 
                    transition duration-300 ease-in-out hover:bg-[#F1F1F5] w-full">
                      <span className="capitalize">{sortItem}</span>
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full bg-whiteSmoke h-full pb-[50px]">
        <div className=" w-full px-[20px] lg:px-[100px] flex items-center flex-col gap-10 pt-[60px]  relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-10 2xl:gap-x-20 gap-y-[40px]">
            {sortedCourses.map((course, index) => (
              <>
                <CourseCard course={course} key={index} />
              </>
            ))}
          </div>
          {coursesCountPages && coursesCountPages > 1 && (
            <div className="w-full justify-center items-center gap-4 flex">
              {pagesArray.map(numb => (
                <button
                  onClick={() => handlePage(numb)}
                  key={numb}
                  className={`text-gerberaRed flex justify-center items-center border-gerberaRed w-[30px] h-[30px] border-2 rounded
                  transition duration-300 ease-in-out hover:bg-gerberaRedLight ${page === numb ? "bg-gerberaRedLight" : ""}`}>
                  {numb}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
