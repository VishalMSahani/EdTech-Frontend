import React, { useState } from 'react'
import { CourseCardExplorer } from '../../../data/homepage-explore';
import CourseCard from './CourseCard';


const TabsName= [

    'All',
    "Physics",
    "Maths",
    "Chemistry",
    "Biology",
    "Science Career Paths"
]

function ExploreNavigation() {



    const [currentTag , setCurrentTab] = useState(TabsName[0]);
    // const [course, setCourse] = useState(CourseCard[0].courses);
    // const [currentCard , setCurrntCard] = useState(CourseCard[0].courses[0].heading)

    // const setMyCard = (value) =>{
    //     setCurrentTab(value)
    //     const visibleCard = CourseCard.filter((course)=>course.tag=== value)
    //     setCourse(visibleCard[0].courses)
    //     setCurrentTab(visibleCard[0].courses[0].heading)
    // }

  return (
    <div>
    <div className='flex  items-center shadow-inner shadow-green-700
    flex-row gap-10 border border-green-600 px-8 py-2 mt-4 mb-4 rounded-lg bg-caribbeangreen-900 '>
        {
            TabsName.map((item, index) =>{
                return(
                    <div className={`px-4 items-center cursor-pointer
                     ${currentTag === item ? "bg-green-500 rounded-2xl border border-green-400 py-1 px-6 " : null}`}
                     onClick={()=> setCurrentTab(item)}
                     >
                        {item}
                    </div>
                )
            })
        }
    </div>
        <div className=''>
            {
                CourseCardExplorer.map((catogery, index)=>{
                    return(
                        <div className='flex flex-col '  key={index}>
                            <h1 className='py-2 px-2 font-bold ml-2 text-center mb-3 mt-3 
                            rounded-md'>
                                {catogery.tag}
                            </h1>
                        <div className='flex flex-col'>
                            <CourseCard 
                            key={index} 
                            courses={catogery.courses}
                            // currentCard={currentCard}
                            // setCurrntCard={set}
                            />
                        </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    
  )
}

export default ExploreNavigation