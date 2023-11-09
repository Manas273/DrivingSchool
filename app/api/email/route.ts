import { sendMail } from "../../services/mailService";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  await sendMail(
    "TEST",
    "sehjpalmanas273@gmail.com",
    "THI IS A TEST FOR MY MEDIUM USERS"
  );
  return NextResponse.json({res: 'SUCCESS'})
};