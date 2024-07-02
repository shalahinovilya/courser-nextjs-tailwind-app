import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gerberaRedLight:"#edbcb9",
        gerberaRed: "#F98149",
        slateGray: "#8A948C",
        darkCerulean: "#003F7D",
        lightGray: "#FDFDFD",
        nobelGray: "#A1A1A1",
        silverCloud: "#F2F4F8",
        philippineGray: "#B9B5B2",
        carolineBlue: "#0148A9",
        paleOrange: "#FFF2EA",
        nightRider: "#303030",
        coarseWool: "#171725",
        davyGray: "#575757",
        whiteSmoke: "#F3F3F3",
        silverMedal: "#D7D7D7",
        vividOrange: "#FFB800"
      },
      screens: {
        xs: "400px"
      },
      gap: {
        '150': '150px',
      },
      gridAutoRows: {
        '2fr1fr': '2fr 1fr',
      },
      gridTemplateColumns: {
        '1fr1fr': '1fr 1fr',
        '1fr3fr1fr': '1fr 2fr 1fr',
        '1fr3fr': '1fr 3fr',
        '2fr1fr':'2fr 1fr'
      },
      boxShadow:{
        faq:"10px 24px 54px 0px #0000000A",
        project:"0px 4px 6px 0px #00000030"
      }
    },
  },
  plugins: [],
}
export default config
