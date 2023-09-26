import { ContactForm } from "@/util/form";
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
        }}
    )
return NextResponse.json(newform)

}