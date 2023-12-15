'use client'

import React from "react";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import Project from "./project-card";
import useSectionInView from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView('Projects', 0.5)

    return (
        <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
            <SectionHeader>My projects</SectionHeader>
                {projectsData.map((project, idx) => (
                    <React.Fragment key={idx}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
        </section>
    );
}
