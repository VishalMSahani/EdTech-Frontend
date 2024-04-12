import React from 'react'
import { Link } from 'react-router-dom'

function Button({children , active , linkto}) {
  return (

    <Link to={linkto}>
      <div className={`px-4 py-2  rounded-md flex  items-center gap-2
       shadow-richblack-300 shadow-sm transition-all duration-200 hover:scale-95
       ${active ? "bg-green-200 text-richblue-800 font-bold hover:bg-yellow-100" :
       " bg-richblack-600 text-white font-semibold hover:bg-richblack-700" }`}>
        {children}
      </div>
    </Link>
  )
}

export default Button