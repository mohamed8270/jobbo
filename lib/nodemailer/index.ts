"use server"

import nodemailer from 'nodemailer';
import fse from 'fs-extra';
import { EmailContent, EmailJobInfo, NotificationType } from '@/types';

// notification type
const Notification = {
    WELCOME: 'WELCOME',
};


const readHTMLContent = async () => {
    const htmlFilePath = 'lib/nodemailer/html_content/welcome_email.html'; // Replace with actual path

    try {
        const data = await fse.readFile(htmlFilePath, 'utf8');
        return data;
    } catch (error) {
        console.log(error);
        return 'Email Error';
    }
}

// mail type accordian
export async function generateEmailBody(job: EmailJobInfo, type: NotificationType) {

    // shortened title
    const shortenedTitle = job.jobName.length > 26 ? `${job.jobName.substring(0,20)}` : job.jobName;

    // read HTML content
    const htmlRead = await readHTMLContent();

    let htmlContent = htmlRead; // Declare outside the callback

    // subject and title
    let subject = '';
    let body = htmlContent;
    console.log(`this is body ${body}`);

    // switch case to generate body and sub
    switch (type) {
        case Notification.WELCOME:
            subject = `Welcome to Jobbo 💰 for ${shortenedTitle}`;
            body = htmlContent;
            break;
    
        default:
            throw new Error("Invalid notification type.");
    }

    return {subject, body};
}

// mail transporter
const transporter = nodemailer.createTransport({
    pool: true,
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'businesscovai.ats@gmail.com',
        pass: process.env.EMAIL_PASSWORD,
    },
    maxConnections: 1,
});

// mail sending
export const sendMail = async (emailContent: EmailContent, sendTo: string[]) => {

    // mail options
    const mailOptions = {
        from: 'businesscovai.ats@gmail.com',
        to: sendTo,
        html: emailContent.body,
        subject: emailContent.subject,
    }

    // transporter mail
    transporter.sendMail(mailOptions ,(error: any, info: any) => {
        if(error) return console.log(error);
        console.log('Email sent:', info);
    })
}