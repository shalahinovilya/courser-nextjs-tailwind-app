import { useState } from "react"

export default function Question({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="flex gap-3 text-[26px] border-b pb-3 border-b-[#DDDDDD] items-start">
      <button onClick={() => setOpen(!open)} className="text-gerberaRed font-bold w-[17px]">
        {open ? "-" : "+"}
      </button>
      <div className="flex flex-col gap-6">
        <button onClick={() => setOpen(!open)} className={`w-full text-${open ? "gerberaRed" : "black"} text-start`}>
          {question}
        </button>
        {open && <div className="border-l-4 border-l-gerberaRed px-3 flex-wrap flex w-full text-[18px]">{answer}</div>}
      </div>
    </div>
  )
}
