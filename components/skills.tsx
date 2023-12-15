'use client'

import React from 'react'
import SectionHeader from './section-header'
import { skillsData } from '@/lib/data'
import useSectionInView from '@/lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVar = {
    initial:{
        opacity: 0,
        y: 100
    }, 
    animate: (idx: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * idx
        }
    })
}

export default function Skills() {
    const { ref } = useSectionInView('Skills')
  return (
    <section ref={ref} id='skills' className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeader>
            My Skills
        </SectionHeader>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill, idx) => (
                    <motion.li className='bg-white border border-black/[0.1] px-5 py-3 rounded-xl dark:text-white dark:bg-white/10' 
                    key={idx}
                    variants={fadeInAnimationVar}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                    custom={idx}
                    >
                    {skill}</motion.li>
                ))
            }
        </ul>
    </section>
  )
}
