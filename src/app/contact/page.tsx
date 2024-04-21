import React from 'react'
import { Meteors } from "@/components/ui/meteors"

function page() {
  return (
    <div className=" min-h-60 w-full">
      
        <Meteors number={100} />
            <h1 className="text-center font-bold text-4xl text-white mt-28">Contact Us</h1>
            <div className=" bg-gray-900 rounded mt-4 w-[60%] min-h-60 mx-auto p-6">
                <input type="text" placeholder="Your Email" className="w-[80%] h-10 mt-5 mx-auto block bg-black p-2 font-serif outline-none"/>
                <input type="text" placeholder="Your Message" className="w-[80%] h-40 mt-5 mx-auto block bg-black p-2 font-serif outline-none"/>
                <button className="bg-black text-white w-[20%] h-10 mt-5 mx-auto block font-serif">Send</button>

            </div>
    </div>
  )
}

export default page