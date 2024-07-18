import { SignedIn, UserButton, SignInButton, SignedOut } from "@clerk/nextjs"

const Navbar = () => {
    return (
        <header className="flex justify-between items-center p-3 bg-blue-800">
            <div className="flex items-center gap-10">
                <h1 className="text-xl font-bold text-white">NaviGo</h1>
                <div className="hidden md:flex gap-6 hover:cursor-pointer text-white">
                    <h2>Help</h2>
                    <h2>More</h2>
                </div>
            </div>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <div className="text-white font-semibold">
                    <SignInButton />
                </div>
            </SignedOut>
        </header>
    )
}
export default Navbar