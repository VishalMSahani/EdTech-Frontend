import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import HilightedText from '../components/core/Home/HilightedText';
import Button from '../components/core/Home/YellowButton';
import BannerVideo from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/Home/CodeBlocks';


function Home() {
  return (
 <div>
    {/* section 1 */}

    <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white'>
        <Link to={"/signup"}>
            <div className='border rounded-xl border-richblack-600 py-2 px-4 mt-14 bg-richblack-800
            hover:scale-95 transition-all duration-200'>
                <div className='flex flex-row gap-2 text-richblack-50 items-center'>
                    <p>Became a instructor</p>
                    <FaArrowRight/>
                </div>
            </div>
        </Link>
        <div className=' mt-5 font-inter text-4xl font-bold text-center'>
         Empower Your Future with
         <HilightedText text={"Coding Skills"}/>
         
        </div>
        <div className='text-center mt-3 text-richblack-100 text-sm md:max-w-[60%] max-w-[90%]'>
        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>
        <div className='flex gap-4 mt-4'>
        <Button active={true} linkto={"/signup"}>
            Learn More
        </Button>
        <Button active={false} linkto={"/signup"}>
            Learn More
        </Button>
        </div>
        
        <div className='flex md:max-w-[60%] max-w-[90%] justify-between
        mt-16 items-center pl-4 mb-4  '>
            <video  className='rounded shadow-xl shadow-richblue-400'
            loop muted autoPlay>
                <source src={BannerVideo} />
            </video>
        </div>
        
       {/* Code Section 1  */}
       
       <div >
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HilightedText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div className=''>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HilightedText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
    

    </div>

    {/* section 2 */}
    {/* section 3 */}
    {/* Footer */}


 </div>
  )
}

export default Home