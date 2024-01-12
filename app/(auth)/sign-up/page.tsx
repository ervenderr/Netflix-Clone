import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GithubIcon } from "lucide-react";
import Logo from '../../../public/google.svg'


export default function SignUp() {
    return (
        <div className="mt-24 rounded bg-black/75 py-10 px-[68px] pt-[60px] md:mt-0 md:min-w-[450px]  md:min-h-[660px] md:px-[68px]">
            <form action="">
                <h1 className="text-[32px] font-bold mb-7">Sign Up</h1>
                <div className="flex flex-col flex-grow">

                    <div className='relative'>
                        <Input
                            type="email"
                            name="email"
                            placeholder=' '
                            className="mb-4  bg-[#333] w-full inline-block h-[50px] focus:ring-0 peer pt-[16px] pb-0 text-lg" />
                        <Label htmlFor="email" className='absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'>Email or phone numbe</Label>
                    </div>

                    <div className='relative'>
                        <Input
                            type="password"
                            placeholder=""
                            name="password"
                            className="mb-12 placeholder:text-gray-300 placeholder:text-sm bg-[#333] w-full inline-block h-[50px] peer pt-[16px] pb-0 text-lg" />
                            <Label htmlFor="password" className='absolute text-sm font-thin text-gray-400  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'>Password</Label>
                    </div>

                    <Button
                        variant='destructive'
                        className="w-full bg-[#e50914] text-md h-[50px]"
                        type="submit">
                        Sign Up
                    </Button>
                </div>

                <div className="text-[#737373] text-sm mt-2 mb-12">
                    Already have an account? <Link href="/login" className="text-white">Sign in</Link>
                </div>

                <div className="flex flex-col w-full justify-center items-center gap-x-3 mt-6">
                    <Button variant='outline' className=''>
                        <Image src={Logo} alt='GoogleLogo' className="mr-2 w-8 h-8" />Sign Up with Google
                    </Button>
                    <Button variant='outline' className='mt-3'>
                        <GithubIcon className="mr-2 " />Sign in with Github
                    </Button>
                </div>
            </form>

        </div>
    )
}