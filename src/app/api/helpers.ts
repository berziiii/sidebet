import prisma from "@/lib/prisma";
import {compare, hash} from "bcryptjs";

export const hashPassword = async (password: string) => {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
}

export const isPasswordValid = async (
    password: string,
    hashedPassword: string
) => {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}

export const checkCredentials = async (credentials: {email: string, password: string}) => {
    const {email, password} = credentials;
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        }
    });

    if (user) {
        const passwordMatch = await isPasswordValid(password, user.password ?? '');
        if (passwordMatch) return user;
        else return null;
    } else return null;
};
