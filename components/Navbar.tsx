"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
type Props = {};

const variants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

function Navbar({}: Props) {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => {
    setClick((prev) => !prev);
  };
  return (
    <motion.nav className="sticky top-0 z-10 max-w-7xl mx-auto">
      <div className="flex justify-between uppercase overflow-hidden  items-center h-24 mx-auto px-4 max-w-7xl text-black">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,

            x: { duration: 1.2 },
          }}
          whileInView="visible"
          className={`w-full text-3xl  text-gray-400 font-bold`}
        >
          Shamith
        </motion.h1>

        <motion.ul
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100, x: { duration: 1.2 } }}
          whileInView="visible"
          className="md:flex hidden font-semibold text-gray-400"
        >
          <motion.li variants={variants} className="p-4 cursor-pointer">
            Home
          </motion.li>
          <motion.li variants={variants} className="p-4 cursor-pointer">
            About
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -60 },
              show: { opacity: 1, x: 0 },
            }}
            className="p-4 cursor-pointer"
          >
            Projects
          </motion.li>
          <motion.li variants={variants} className="p-4 cursor-pointer">
            Contact
          </motion.li>
        </motion.ul>
        <div onClick={handleClick} className="md:hidden">
          {click ? (
            <AiOutlineClose className="text-white" size={22} />
          ) : (
            <BiMenuAltRight className="text-white" size={22} />
          )}
        </div>

        <div
          className={`${
            click
              ? "fixed md:hidden left-0  opacity-[0.9] bg-gray-900 top-0 w-[60%] text-white h-full border-r ease-in-out  duration-500 border-r-gray-300 "
              : "fixed left-[-100%] "
          }`}
        >
          <motion.ul
            initial="hidden"
            animate={`${click && "show"}`}
            whileInView={`${click && "visible"}`}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            className="text-white space-y-6 font-semibold uppercase p-4  "
          >
            <motion.li
              variants={variants}
              className="p-4 border-b mt-20   cursor-pointer border-b-gray-600"
            >
              Home
            </motion.li>
            <motion.li
              variants={variants}
              className="p-4 border-b  cursor-pointer border-b-gray-600"
            >
              About
            </motion.li>
            <motion.li
              variants={variants}
              className="p-4 border-b  cursor-pointer border-b-gray-600"
            >
              Projects
            </motion.li>
            <motion.li
              variants={variants}
              className="p-4 border-b  cursor-pointer border-b-gray-600"
            >
              Contact
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
