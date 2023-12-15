'use client'

import React from 'react'
import SectionHeader from './section-header'
import { motion } from "framer-motion";
import useSectionInView from '@/lib/hooks';


export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section className='mb-28 max-w-[45rem] text-center flex flex-col justify-center items-center leading-8 sm:mb-40 scroll-mt-28 dark:text-white dark:text-opacity-70'
      ref={ref}
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{delay: 0.175}}
      id='about'
    >
        <SectionHeader>About Me</SectionHeader>
          <p className="mb-3">
          After working as <span className="font-semibold">Visual Merchandiser</span> for 3 years{" "}
          , I decided to enroll in a coding bootcamp and learned{" "}
          <span className="font-semibold">full-stack web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{" "}
          <span className="font-semibold">
            Vue.js, React.js, Node.js, and PostgreSQL.{" "}
          </span>
          I am currently exploring TypeScript and Next.js, which I implemented on this portfolio. I am currently looking for a{" "}
          <span className="font-semibold">full-time position</span> as a software
          developer.
        </p>

        <p>
          <span className="italic">When I'm not coding</span>, I enjoy playing
          video games, watching movies, and drawing portraits. I also enjoy{" "}
          <span className="font-semibold">learning languages</span>. I am currently
          learning{" "}
          <span className="font-semibold">Spanish</span>
        </p>
    </motion.section>
    
  )
}
