"use client";
import { Star } from 'lucide-react'
import React from 'react'
import { FaStar } from "react-icons/fa";

export default function Ratings() {
    const [stars, setStars] = React.useState(0);
    console.log(stars);
    
  return (
    <div className='flex gap-2'>
        {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className=''>
                <FaStar size={25} fill={ index + 1 <= stars ? "gold" :"#D6DBDF"} cursor="pointer" onClick={() => setStars(index + 1)} />
            </div>
        ))}
    </div>
  )
}
