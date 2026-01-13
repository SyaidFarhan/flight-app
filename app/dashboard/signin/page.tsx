import { FC } from 'react';
import { Metadata} from 'next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


interface SignPageProps {
  
}
export const metadata : Metadata = {
    title : 'Dashboard | Sign In', 
}


const page: FC<SignPageProps> = ({  }) => {
  return (
    <div className='w-full h-screen'>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h2 className='mt-10 text-center text-2xl font-bold tracking-tight text-gray-900'>
                    Sign In Page
                </h2>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form action="">
                    <Input type='email' placeholder='Email' className='mb-4'/>
                    <Input type='password' placeholder='Password' className='mb-4'/>
                    <Button type='submit' className='w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-400 transition-colors'>
                        Sign In
                    </Button>
                </form>

            </div>
            </div>

        </div>
      
    </div>
  );
};

export default page;