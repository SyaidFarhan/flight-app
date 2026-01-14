"use server"

import { redirect } from "next/navigation";
import { formSchema } from "./validation";
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
    redirect('/dashboard');
}