"use client";
import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import {Button} from "./ui/moving-border"
import { BackgroundGradient } from './ui/background-gradient';

// creating new datatype in typescript
interface Course {
        "id": number,
        "title":string,
        "slug":string,
        "description": string,
        "price":number,
        "instructor":string,
        "isFeatured": boolean,
        "image": string
}

function FeaturedCourses() {
    const featuredCourses= courseData.courses.filter((course:Course)=>course.isFeatured)
  return (
    <div className=" bg-gray-900 w-full min-h-[40rem] flex flex-col items-center justify-center gap-6">
        <p className="mt-3 text-center font-semibold text-teal-600 text-base uppercase">Featured Courses</p>
        <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Learn With the Best</p>
        
        {/* this div contains courses card*/} 
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <p className='bg-white text-black p-2 rounded mt-3'><Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link></p>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div> 
        


        {/* this div contains button */}
        <div className="mt-10">
            <Link href={"/courses"}>
                <Button>View All Courses</Button>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses