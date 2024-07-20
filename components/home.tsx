import { SignInButton } from "@clerk/nextjs"

const Home = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="bg-blue-600 absolute top-[-6rem] -z-10 right-[11rem] h-[20rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold pt-52 leading-tight mx-auto text-center bg-gradient-to-b from-white to-blue-950 text-transparent bg-clip-text">Ride the blockchain revolution</h2>
            <p className="text-xs md:text-base w-[95%] md:w-[80%] lg:w-[40%] px-2 md:px-0 text-center">Navigo is a blockchain-enabled cab booking app that ensures safe and transparent transactions using MetaMask.</p>
            <div className="flex justify-center bg-blue-950 text-white font-semibold text-sm p-2 rounded-md w-[8rem] md:w-[10rem] mx-auto mt-4 hover:cursor-pointer hover:bg-slate-800">
                <SignInButton>
                    <p className="text-xs md:text-base">Get Started</p>
                </SignInButton>
            </div>
        </section>
    )
}
export default Home