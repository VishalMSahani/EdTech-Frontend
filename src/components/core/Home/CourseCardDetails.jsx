import React from 'react'

function CourseCardDetails({course}) {

    const {heading, description, level, lessonNumber} = course

  return (
    <div className='flex flex-col border border-green-700 rounded-2xl px-2 py-2'>
        <h2 className='text-lg font-semibold text-left mb-4 mt-3 text-caribbeangreen-200'>{heading}</h2>
        <p className='text-richblue-25 text-sm font-normal text-pretty text-left'>{description}</p>
        <div className='flex justify-between flex-row mt-6 m-2'>
        <p className=' text-center text-xs'>Level: {level}</p>
        <p className=' text-green-200  text-center text-xs'>Lesson No. {lessonNumber}</p>
        </div>
       
    </div>
  )
}

export default CourseCardDetails