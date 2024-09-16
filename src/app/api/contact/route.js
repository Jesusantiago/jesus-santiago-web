'use server'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export async function POST(request) {
    console.log('hola desde server')
    console.log(request)
    try {
        const { email, text } = await request
        console.log(email)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user,
                pass
            }
        })

        const mailOption = {
            from: email,
            to: user,
            subject: "Este correo viene desde tu Portfolio",
            text: text
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json(
            { message: 'Messsage sent successfully' },
            { status: 200 }
        )

    } catch (error) {
        return new NextResponse('Failed to send message.', { status: 500 })
    }
}

// export default POST