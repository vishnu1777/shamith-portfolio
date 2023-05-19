"use client";
import React from "react";
import { motion, useDragControls } from "framer-motion";
import Cube from "./Cube";
type Props = {};

function Hero({}: Props) {
  return (
    <div className="max-w-7xl  grid md:grid-cols-2 h-[90vh] py-1 mx-auto  overflow-hidden ">
      <div className=" flex flex-col justify-center gap-4 ">
        <h1 className="p-2 font-epilogue text-white font-bold text-3xl sm:text-6xl animate-bounce text-cyan-400">
          Shamith Kumar Jain
        </h1>
        <h3 className="sm:text-xl p-2 font-epilogue text-white font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          placeat dicta ipsa voluptas?.....
        </h3>
        <button className="px-4 py-2 ml-2 font-bold text-white rounded-md w-[30%]  bg-green-400">
          My Resume
        </button>
      </div>
      <motion.div className="flex mt-14  perspective-[800px]  justify-center items-center">
        {/* <Image
          unoptimized
          src={HeroImg}
          alt="/vercel.svg"
          height={100}
          width={100}
          className="w-full h-[80%] sm:h-[90%]"
        /> */}
        <Cube />
      </motion.div>
    </div>
  );
}

export default Hero;
