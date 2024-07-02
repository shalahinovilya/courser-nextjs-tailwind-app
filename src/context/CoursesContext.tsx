import { IStep } from "@/interfaces/ISteps"
import { createContext, useContext, useEffect, useState } from "react"

const CoursesContext = createContext({} as any)

export const useCourses = () => useContext(CoursesContext)

export const CoursesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<IStep[]>([])

  return <CoursesContext.Provider value={{ categories, setCategories }}>{children}</CoursesContext.Provider>
}
