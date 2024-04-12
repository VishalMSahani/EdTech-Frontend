import React from 'react'
import CourseCardDetails from './CourseCardDetails'

function CourseCard({courses}) {
  return (
    <div className='flex gap-3 max-w-[950px] max-h[900px]'>
        {
            courses.map((course, index)=>{
                return(
                    <div>
                        <CourseCardDetails key={index} course={course}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CourseCard