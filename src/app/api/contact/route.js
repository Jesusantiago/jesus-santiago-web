import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

const post = async (request) => {
    try {
        const { email, content } = await request.json()

        const transporter = nodemailer.createTransport({
            service: 'smtp.gmail.com',
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
            text: content
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json(
            { message: 'Messsage sent successfully'},
            { status: 200 }
        )

    } catch (error) {
        return new NextResponse('Failed to send message.' , { status: 500})
    }
}
