"use client";

import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
import { signIn } from "next-auth/react";

export default function FacebookSigninButton() {
    return (
        <Button onClick={() => signIn('facebook')} variant='outline' className='mt-3'>
            <Facebook className="mr-2 outline-none rounded-full bg-[#3b5998]" />Sign in with Facebook
        </Button>
    );
}