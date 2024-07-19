import { SignInButton } from "@clerk/nextjs"

const Home = () => {
    return (
        <section>
            <h2 className="text-6xl font-bold flex items-center justify-center pt-40 w-[70%] leading-tight mx-auto text-center text-blue-800">Secure and Transparent Cab Booking with Blockchain Innovation</h2>
            <div className="flex justify-center items-center bg-slate-900 text-white font-semibold text-sm p-2 rounded-md w-[10rem] mx-auto mt-4 hover:cursor-pointer hover:bg-slate-800">
                <SignInButton />
            </div>
        </section>
    )
}
export default Home