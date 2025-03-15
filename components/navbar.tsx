import { SignedIn, UserButton, SignInButton, SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import Logo from "@/public/logo.svg";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-3 px-3 md:px-14 bg-yellow-500">
            <div className="flex items-center gap-10">
                <Link href="/">
                    <div className="flex items-center">
                        <Image
                            src={Logo}
                            alt="Logo"
                            height={24}
                            width={24}
                        />
                        <h1 className="text-xl font-bold text-white">navigo</h1>
                    </div>
                </Link>

                <div className="flex gap-6 hover:cursor-pointer text-white">
                    <Link href="/help">Help</Link>
                </div>
            </div>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    )
}
export default Navbar