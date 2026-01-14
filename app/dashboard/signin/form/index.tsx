"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ActionResult, handleSignIn } from "./actions";
import { FC, useActionState, useEffect } from "react";



interface SignPageProps {
  
}

const initialFormState : ActionResult = {
    errorTitle : null,
    errorMessage : []
}


const FormSignIn: FC<SignPageProps> = ({  }) => {
    const [state, formAction] = useActionState(handleSignIn, initialFormState)
    
    // Log errors in browser console when state changes
    useEffect(() => {
        if (state.errorTitle) {
            console.log('Error:', state.errorTitle);
            console.log('Messages:', state.errorMessage);
        }
    }, [state]);
    
  return (
    <div className='w-full h-screen'>
        <div className="flex min-h-full flex-1 flex-col justify-center p-6 py-12 lg:px-8">
            <div className='sm:mx-auto sm:w-full sm:max-w-sm border p-8 rounded-lg shadow-lg'>
                <h2 className='mt-5 text-center text-2xl font-bold tracking-tight text-gray-900'>
                    Sign In Page
                </h2>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form action={formAction}>
                    <Input type='email' name='email' placeholder='Email' className='mb-4'/>
                    <Input type='password' name="password" placeholder='Password' className='mb-4'/>
                    <Button type='submit' className='w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-400 transition-colors' >
                        Sign In
                    </Button>
                </form>

            </div>
            </div>

        </div>
        <div className='h-screen bg-gray-100 flex justify-center items-center'>hello world</div>
      
    </div>
  );
};

export default FormSignIn;



