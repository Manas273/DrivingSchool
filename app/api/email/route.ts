import { sendMail } from "../../services/mailService";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
   await sendMail(
     "Contact Form",
     "sehjpalmanas273@gmail.com",
  );
  return NextResponse.json({res: 'SUCCESS'})
};