'use client'

import { useState } from "react";

export default function AnimatedInfoCard({title, content, children}) {

const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <div onClick={() => setOpen(!open)} className={`absolute left-[1%] min-h-50 bg-green-900 w-[98%] rounded-4xl p-2 flex flex-col justify-between text-white transition-all duration-300 border border-green-950 hover:bg-green-700 hover:shadow-white hover:shadow-2xl ${
        open ? 'top-40' : 'top-8'
        }`}>
            <div className="min-w-full text-center p-10">
                <p className="text-xl">{children}</p>
            </div>
            <div className="min-w-full text-center">
                {open ? <p>See less</p> : <p>See more!</p>}
            </div>
        </div>
        <div className="flex flex-col min-h-50 flex-1 justify-evenly items-center p-5 text-xl bg-white backdrop-blur-sm border border-gray-400 rounded-4xl">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    </div>
    )
}


