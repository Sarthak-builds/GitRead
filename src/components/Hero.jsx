import { motion } from "motion/react"

function Hero() {


    return (
        <motion.div className="w-full gap-3 h-fit px-5 sm:px-10 md:px-20 xl:px-70 py-10  flex flex-col justify-between items-center  text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center font-grotesk font-bold opacity-0" transition={{delay:0.3, duration:0.5}} whileInView={{opacity:1}}>
           <h1>Generate your <span className="text-green-700">Website Insights</span> in seconds and elevate your experience</h1>
           <p className=" text-base md:text-xl font-light"> Instant, Detailed Insights to Drive  <strong className="bg-green-900 rounded-lg px-2 mx-1">Performance, SEO, and User Conversions. </strong></p>
        </motion.div>
    )
}

export default Hero