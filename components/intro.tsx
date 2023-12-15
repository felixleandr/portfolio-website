"use client";
import Image from "next/image";
import React from "react";
import profPic from "@/public/Felix_Leander.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload } from 'react-icons/hi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from "react-icons/fa";
import useSectionInView from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5)
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
    
    return (
        <section className="max-w-[50rem] mb-28 text-center sm:mb-0 scroll-mt-[100rem]" id="home" ref={ref}>
            <div className="flex items-center justify-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src={profPic}
                            alt="profile-picture"
                            quality="60"
                            width="192"
                            height="192"
                            className="rounded-full h-24 w-24 border-[0.2rem] border-white object-cover shadow-xl"
                            priority={true}
                        />
                    </motion.div>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl dark:text-white dark:text-opacity-90"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hi, I'm Felix !<br></br></span> not to be confused with the cat, <br />I'm a{" "}
                <span className="font-bold">full-stack developer.</span> 
            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-5 px-4 text-lg font-medium"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.15,
                }}
            >
                <Link href='#contact' className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all dark:bg-[#0000FE] dark:border-none"
                onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                }}
                >
                    Contact me here
                </Link>

                <a href='/CV-Felix_Leander.pdf' download className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-[#0000FE] hover:text-white active:scale-105 transition-all cursor-pointer border border-[#0000FE] dark:bg-white/20 dark:text-white dark:border-none">
                    Download CV <HiDownload className="group-hover:translate-y-1 transition"/>
                </a>

                <div className="flex gap-5">
                    <a href="https://www.linkedin.com/in/felix-leander-2102b2116/" target="_blank" className="p-4 bg-white text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-[#0000FE] hover:text-white active:scale-105 transition-all cursor-pointer border border-[#0000FE] dark:bg-white/20 dark:text-white dark:border-none">
                        <BsLinkedin />
                    </a>

                    <a href="https://github.com/felixleandr" target="_blank" className="p-4 bg-white text-gray-700 text-[1.15rem] flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-[#0000FE] hover:text-white active:scale-105 transition-all cursor-pointer border border-[#0000FE] dark:bg-white/20 dark:text-white dark:border-none">
                        <FaGithubSquare />
                    </a>

                </div>


            </motion.div>
        </section>
    );
}
