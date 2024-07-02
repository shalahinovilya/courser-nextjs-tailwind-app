import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Logo from "@/components/Icons/message.svg"

const GlobalLoader = () => {
  const router = useRouter()
  const loaderRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (loaderRef.current) {
      loaderRef.current.style.display = "none"
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = (url: string, { shallow }: { shallow: boolean }) => {
      if (loaderRef.current) {
        loaderRef.current.style.display = "flex"
      }
    }

    const handleRouteComplete = (url: string, { shallow }: { shallow: boolean }) => {
      if (loaderRef.current) {
        loaderRef.current.style.display = "none"
      }
    }

    router.events.on("routeChangeStart", handleRouteChange)
    router.events.on("routeChangeComplete", handleRouteComplete)

    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
      router.events.off("routeChangeComplete", handleRouteComplete)
    }
  }, [router.events])

  return (
    <div
      id="globalLoader"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white hidden bg-white"
      ref={loaderRef}>
      <Image width={120} height={120} src={Logo} alt="loader" className="rounded-lg animate-loader" />
    </div>
  )
}

export default GlobalLoader
