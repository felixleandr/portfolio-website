"use client";

import React from "react";
import SectionHeader from "./section-header";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    const { pending } = useFormStatus()

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,39rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true
            }}
        >
            <SectionHeader>Contact me</SectionHeader>
            <p className="text-gray-700 -mt-5 dark:text-white/80">
                You can contact me directly at{" "}
                <a
                    className="underline"
                    href="mailto:felixleander2108@gmail.com"
                >
                    felixleander2108@gmail.com
                </a>{" "}
                or through this form.
            </p>
            <form className="mt-10 flex flex-col dark:text-black"
            action={async (formData) => {
                const { data, error } = await sendEmail(formData)

                if(error){
                    toast.error(error);
                    return;
                }

                toast.success('Email sent successfully!')
            }} 
            >
                <input
                    className="h-14 rounded-lg border border-black/10 px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    placeholder="E-mail"
                    type="email"
                    required
                    maxLength={100}
                    name="email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    placeholder="Your message"
                    maxLength={500}
                    required
                    name="message"
                />
               <SubmitBtn/>
            </form>
        </motion.section>
    );
}
