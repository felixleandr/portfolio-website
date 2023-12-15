'use client'

import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
 import "react-vertical-timeline-component/style.min.css";
import SectionHeader from './section-header';
import { experiencesData } from '@/lib/data';
import useSectionInView from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {

  const { ref, inView } = useSectionInView('Experience', 0.3)

  const { theme } = useTheme();

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40 h-auto w-full border rounded-2xl border-[#0000FE] py-8'>
        <SectionHeader>
            My Experience
        </SectionHeader>
        <VerticalTimeline 
        lineColor=''
        >
            {
                experiencesData.map((exp, idx) => (
                    <React.Fragment key={idx}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: theme === 'light' ? "white" : 'rgba(255, 255, 255, 0.05',
                                boxShadow: 'none',
                                border: theme === 'light' ? "1px solid #0000FE" : "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: 'left',
                                padding: "1.3rem 2rem"
                            }}
                            visible={inView}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #9ca3af"
                            }}
                            date={exp.date}
                            icon={exp.icon}
                            iconStyle={{
                                background: theme === 'light' ? 'white' : 'rgba(17, 24, 39)',
                                border: theme === 'light' ? '1px solid #0000fe' : "1px solid rgba(0, 0, 0, 0.05)",
                            }}
                        >
                            <h3 className='font-semibold capitalize'>{exp.title}</h3>
                            <p className='font-normal !mt-0'>{exp.location}</p>
                            <p className='!mt-1 !font-normal text-gray-700 dark:text-white/70'>{exp.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}
