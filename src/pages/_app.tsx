import "@/styles/globals.css"
import "@/styles/custom.css"
import type { AppProps } from "next/app"
import { Layout } from "@/components/Layout"
import { CoursesContextProvider } from "@/context/CoursesContext"
import GlobalLoader from "@/components/Loaders/GlobalLoader"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CoursesContextProvider>
      <Layout>
        <Component {...pageProps} />
        <GlobalLoader />
      </Layout>
    </CoursesContextProvider>
  )
}
