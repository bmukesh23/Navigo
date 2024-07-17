import { SignedIn, UserButton } from "@clerk/nextjs"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-3">
            <h1 className="text-2xl font-bold">NaviGo</h1>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}
export default Navbar