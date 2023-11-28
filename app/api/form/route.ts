import { ContactForm } from "@/util/form";
import { sendMail } from "../../services/mailService";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import next from "next/types";


export async function POST(request: Request) {
    const body: ContactForm = await request.json()
    const prisma = new PrismaClient()
    const newform = await prisma.post.create(
        {
            data: {
                firstname: body.firstname1,
                lastname: body.lastname1,
                email: body.email1,
                phone: body.phone1,
                message: body.message1
            }
        }
    )
    var nodemailer = require("nodemailer");

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
        },
    });
    
    var mailOptions = {
        from: process.env.EMAIL,
        to: 'newtruckersdrivingacademy@gmail.com',
        subject: 'Contact Form',
        html: `<!DOCTYPE html><html> 
        <head> 
        <title></title> <meta charset="utf-8"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style>
        </head>
        <body style="margin: 0 !important; padding: 0 !important; background: #fff"> 
        <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
        <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > 
        <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> 
        <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > 
        <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > 
        <h2>New Contact Message</h2> <div class="form-container"> 
        <h3 class="form-heading" align="left">First Name</h3><p class="form-answer" align="left">${body.firstname1}</p>
        <h3 class="form-heading" align="left">Last Name</h3><p class="form-answer" align="left">${body.lastname1}</p> 
        <h3 class="form-heading" align="left">Email</h3><p class="form-answer" align="left">${body.email1}</p> 
        <h3 class="form-heading" align="left">Phone</h3><p class="form-answer" align="left">${body.phone1}</p> 
        <h3 class="form-heading" align="left">Message</h3><p class="form-answer" align="left">${body.message1}</p> 
        </div></td>
        </tr>
        </table> 
        </td></tr></table> 
        </td></tr></table> </td></tr></table> 
        </body></html>`
    };
    
    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err: any, response: any) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    })
    return NextResponse.json(newform)
}