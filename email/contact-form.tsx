import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'
import { Tailwind } from '@react-email/components'

type ContactFormEmailProps = {
    message: string,
    senderEmail: string
}

export default function ContactForm({
    message,
    senderEmail
}: ContactFormEmailProps) {
  return <Html>
    <Head>
        <Preview>New message from your portfolio site</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white border border-black/10 my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>You received the following message form the contact form</Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>from: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Head>
  </Html>
}
