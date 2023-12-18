import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";
import {hashPassword} from "@/app/api/helpers";

export async function POST(request: NextRequest) {
    const body = await request.json();
    if (body.email && body.password) {
        const hashedPassword = await hashPassword(body.password);
        const user = await prisma.user.create({
            data: { ...body, password: hashedPassword },
        });
        if (user) {
            NextResponse.json(user);
        } else NextResponse.json({message: 'Something went wrong.'}, {status: 404});
    }
}
