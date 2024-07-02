"use server";

import nodemailer from 'nodemailer';
import { EmailContent, EmailJobInfo, NotificationType } from '@/types';
import { readHTMLContent } from './html_content/readHTMLContent';

// notification type
const Notification = {
    WELCOME: 'WELCOME',
    POPULAR: 'POPULAR',
    VIEWS: 'VIEWS',
    APPLY: 'APPLY',
    POSTED: 'POSTED',
};


// mail type accordian
export async function generateEmailBody(job: EmailJobInfo, type: NotificationType) {

    // shortened title
    const shortenedTitle = job.jobName.length > 26 ? `${job.jobName.substring(0,20)}` : job.jobName;

    // read HTML content
    const welcomeContent = await readHTMLContent('lib/nodemailer/html_content/welcome_email.html');
    const popularContent = await readHTMLContent('lib/nodemailer/html_content/popular_email.html');
    const viewsContent = await readHTMLContent('lib/nodemailer/html_content/views_email.html');
    const applyContent = await readHTMLContent('lib/nodemailer/html_content/apply_email.html');
    const postedContent = await readHTMLContent('lib/nodemailer/html_content/posted_email.html');

    // subject and title
    let subject = '';
    let body = '';
    console.log(`this is body ${body}`);

    // switch case to generate body and sub
    switch (type) {
        case Notification.WELCOME:
            subject = `Welcome to Jobbo 💰 for ${shortenedTitle}`;
            body = welcomeContent;
            break;

        case Notification.POPULAR:
            subject = `${shortenedTitle} role is getting fire 🔥`;
            body = popularContent;
            break;

        case Notification.VIEWS:
            subject = `${shortenedTitle} high on reels 😎`;
            body = viewsContent;
            break;

        case Notification.APPLY:
            subject = `${shortenedTitle} most likes 🤗`;
            body = applyContent;
            break;

        case Notification.POSTED:
            subject = `${shortenedTitle} posted now 🏃‍➡️`;
            body = postedContent;
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