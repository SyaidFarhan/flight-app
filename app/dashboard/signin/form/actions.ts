"use server"

import { redirect } from "next/navigation";
import { formSchema } from "./validation";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";

export interface ActionResult {
    errorTitle: string | null;
    errorMessage: string[] | null;
}

export async function handleSignIn (prevState: any, formData : FormData) : Promise<ActionResult> {
    const values = formSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!values.success) {
        const errorMessages = values.error.issues.map(issue => issue.message);
        console.log(errorMessages);
        return {
            errorTitle: 'Validation Error',
            errorMessage: errorMessages,
        };
    }
const existingUser = await prisma.user.findUnique({
    where: {
        email: values.data.email,
    },
});

if (!existingUser){
    return {
        errorTitle : 'Error User',
        errorMessage : ['User not found'],
    }
}

const comparePassword = await bcrypt.compareSync(values.data.password, existingUser.password);
if (!comparePassword) {
    return {
        errorTitle: 'Error Password',
        errorMessage: ['Incorrect password'],
    };
}

const session = await lucia.createSession(existingUser.id, {});
const sessionCookie = lucia.createSessionCookie(session.id);
(await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

redirect('/dashboard');
}