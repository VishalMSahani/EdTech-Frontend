import React from 'react'
import Button from './YellowButton'
import HilightedText from './HilightedText'
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import coding from '../../../assets/Programming-bro.svg'

const headingsData = {
    leadership: {
      heading: "Leadership",
      subheading: "Fully committed to the success company",
      logo:Logo1
    },
    responsibility: {
      heading: "Responsibility",
      subheading: "Students will always be our top priority",
      logo: Logo2
    },
    flexibility: {
      heading: "Flexibility",
      subheading: "The ability to switch is an important skill",
      logo: Logo3
    },
    solveTheProblem: {
      heading: "Solve the problem",
      subheading: "Code your way to a solution",
      logo: Logo4
    }
  };
  


function Timeline() {
  return (
    <div className='flex flex-col w-[80%] justify-center items-center'>
        {/* section 1 */}
        <div className='mt-3 flex flex-row gap-16 justify-between items-center'>
            <div className='text-3xl text-black font-semibold '>
                <p>Get the skills you need for a
                    <HilightedText text={"job that is in demand."}/>
                </p>
            </div>
            <div className=''>
            <div className='mb-6'>
            <p className='text-richblue-700 text-sm'>
                The modern StudyNotion is the dictates its own terms. Today, to be a competitive 
                specialist requires more than professional skills.</p>
            </div>
               <div className='flex'>
               <Button active={true}>Learn More</Button>
               </div>
            </div>
        </div>
        {/* section 2 */}

        <div className='flex flex-row '>

        <div className=' text-richblack-700 mt-20 mr-10'>
      {Object.keys(headingsData).map((key, index) => {
        const item = headingsData[key];
        return (
          <div className='flex gap-10' key={index}>
            <div className='mt-1' >
            <img src={item.logo} alt={`Logo ${index + 1}`} style={{ width: 25, height: 25 }} />
            </div>
            <div className='mb-8'>
            <h2 className='font-semibold text-lg'>{item.heading}</h2>
            <p className='text-sm font-normal '>{item.subheading}</p>
            </div>
          </div>
        );
      })}
    </div>
    <div className='ml-5'>
        <img src={coding} alt="Coadind Animated" style={{ width: 400, height:400 }} />
    </div>

    </div>
    </div>
   
  )
}

export default Timeline