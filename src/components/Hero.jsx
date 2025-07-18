import { motion } from "motion/react"

function Hero() {


    return (
        <motion.div className="w-full h-fit px-70  py-15  flex justify-center items-center text-5xl text-white text-center font-grotesk font-bold opacity-0" transition={{delay:0.5, duration:1}} whileInView={{opacity:1}}>
           <h1>Generate your <span className="text-green-600">Website Insights</span> in seconds and elevate your experience</h1>
        </motion.div>
    )
}

export default Hero