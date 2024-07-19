import { SignedIn, UserButton, SignInButton, SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import Logo from "@/public/logo.svg";

const Navbar = () => {
    return (
        <header className="flex justify-between items-center p-3 bg-blue-800">
            <div className="flex items-center gap-10">
                <div className="flex items-center">
                    <Image
                        src={Logo}
                        alt="Logo"
                        height={24}
                        width={24}
                    />
                    <h1 className="text-xl font-bold text-white">navigo</h1>

                </div>
                <div className="hidden md:flex gap-6 hover:cursor-pointer text-white">
                    <h2>Help</h2>
                    <h2>More</h2>
                </div>
            </div>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    )
}
export default Navbar