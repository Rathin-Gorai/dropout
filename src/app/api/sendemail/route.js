import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const {email,name} = await request.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: 'todaytalks3@gmail.com',
              pass:process.env.PASSWORD,
            },
          });

        const mailOption = {
            from: 'todaytalks3@gmail.com',
            to: email,
            subject: "Thank you for your message",
            html: `
            <h3>Hello ${name}</h3>
            <p>Thanks for your message we will try to reply you very soon </p>
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}