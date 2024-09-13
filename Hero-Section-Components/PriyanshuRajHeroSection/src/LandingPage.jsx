import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import ArrowDown from "./ArrowDown";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className='landing flex justify-start items-center flex-col  w-full h-screen bg-[url("./bg2.jpg")] bg-cover bg-no-repeat'>
      <div className="flex  items-center flex-col sm:pt-40 pt-44  ">
        <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          className='md:text-9xl text-white text-5xl font-["Oswald"] tracking-tighter uppercase'
        >
          Software Developer
        </motion.h1>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="border-b-1 border"
          ></motion.div>
          <div className="flex justify-between items-center  sm:gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="border-t-2 sm:w-[50px] w-[80px]  border-white"
            ></motion.div>
            <motion.h1
              initial={{ opacity: 0,y:100 }}
              animate={{ opacity: 1,y:0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className='text-4xl font-["Space_Grotesk"] tracking-tight text-center mt-2 leading-none sm:leading-none sm:mt-0 md:tracking-tighter uppercase text-white'
            >
              Full Stack Web Developer
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="border-t-2 sm:w-[50px] w-[80px]  border-white"
            ></motion.div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <motion.p
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="sm:w-[65%] w-full sm:px-0 px-6  sm:leading-2 leading-tight font-[500] sm:text-sm text-lg tracking-tight text-white"
        >
          I am a freelancer based in Bengaluru, specializing in delivering
          high-quality full-stack projects using the MERN stack and Java. My
          expertise extends to UI design, SEO, and UI development, allowing me
          to create visually appealing and user-friendly interfaces that drive
          results. I am passionate about helping businesses grow by providing
          tailored digital solutions that meet their unique needs.
        </motion.p>
      </div>
      <div className="sm:gap-8 gap-4 flex mt-12 sm:mt-8 pl-4 justify-start w-full sm:w-[65%]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center bg-transparent backdrop-blur-2xl border-[1px] rounded-full sm:px-1 px-4 hover:bg-black hover:text-white overflow-hidden"
        >
          <button className=" px-3 py-2 bg-transparent text-white  outline-none">
            Read More
          </button>
          <MdOutlineArrowOutward size={25} color="white" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center bg-transparent backdrop-blur-2xl border-[1px] rounded-full px-1"
        >
          <button className=" px-3 py-2 text-white ">Contact</button>
          <IoMdContact size={25} color="white" />
        </motion.div>
      </div>
      <div className="arrowAnim">
        <ArrowDown />
      </div>
    </div>
  );
};

export default LandingPage;