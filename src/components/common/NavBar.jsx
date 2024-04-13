import React, { useState } from 'react'
import Logo from '../../assets/Logo/Logo-Full-Light.png'
import { NavbarLinks } from '../../data/navbar-links'
import { Link } from 'react-router-dom'

function NavBar() {

    const [currentNavTab , setCurrentNavTab] = useState(NavbarLinks[0])

  return (
    <div className='flex flex-row bg-richblue-900 border-richblue-600 border-b-2 h-14 shadow-sm shadow-green-700
    items-center  justify-evenly'>
        <div>
            <img src={Logo} alt="" width={150} height={40} />
        </div>

        <div className='flex flex-row gap-5 mx-10  '>
        {
            NavbarLinks.map((link, index)=>{
                return(
                   <ul className={`${currentNavTab === link ? 
                    "text-green-200 " 
                   : null}`}
                    onClick={()=> setCurrentNavTab(link)} key={index}>
                    {
                        link.title === "Catalog" ? (<div></div>) : (
                            <Link to={link?.path}>
                                <p className='hover:border-b-[1px] border-green-500 
                                transition-all duration-100'>{link.title}</p>
                            </Link>
                        )
                    }
                   </ul>
                )
            })
        }
        </div>
        <div>
            
        </div>
        
    </div>

  )
}

export default NavBar