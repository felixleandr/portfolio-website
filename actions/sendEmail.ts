"use server";

import { getErrorMsg, validation } from "@/lib/helpers";
import { Resend } from "resend";
import ContactForm from "@/email/contact-form";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const message = formData.get("message");
    const senderEmail = formData.get("email");

    if(!validation(senderEmail, 100)){
        return {
            error: 'Invalid email address'
        }
    }

    if(!validation(message, 5000)){
        return {
            error: 'Invalid message'
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "felixleander2108@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            // text: message as string,
            react: React.createElement(ContactForm, {
                message: message as string,
                senderEmail: senderEmail as string
            })
        });
        
    } catch (error: unknown) {
        return {
            error: getErrorMsg(error)
        }
    }

    return {
        data,
    }
};
