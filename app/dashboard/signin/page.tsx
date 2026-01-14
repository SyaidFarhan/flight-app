import { FC } from 'react';
import { Metadata} from 'next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormSignIn from './form';


interface SignPageProps {
  
}
export const metadata : Metadata = {
    title : 'Dashboard | Sign In', 
}


const page: FC<SignPageProps> = ({  }) => {
  return (
  <FormSignIn/>
  
  );
};

export default page;