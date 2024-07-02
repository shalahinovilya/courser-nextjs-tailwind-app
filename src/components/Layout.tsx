import React from "react"
import { NavBar } from "@/components/NavBar"

import { poppins } from "@/styles/font"
import { Footer } from "@/components/Footer"
import Head from "next/head"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>EZY Skills</title>
        <meta name="description" content="EZY Skills - empower you skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="curses, react,vue,aws, ezy skills, programming,coding,not coding,IT,not IT" />
        <meta property="og:title" content="EZY Skills" />
        <meta property="og:description" content="EZY Skills - empower you skills" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.svg" />
      </Head>
      <NavBar />
      <main className={`${poppins.className} flex min-h-screen w-full overflow-x-hidden`}>{children}</main>
      <Footer />
    </>
  )
}
