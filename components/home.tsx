import { useState, useEffect } from "react"
import { SignInButton } from "@clerk/nextjs"
import Loader from "./loader";
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold pt-52 leading-tight mx-auto text-center bg-gradient-to-b from-white to-blue-950 text-transparent bg-clip-text">Ride the blockchain revolution</h2>
            <p className="text-xs md:text-base w-[95%] md:w-[80%] lg:w-[40%] px-2 md:px-0 text-center">Navigo is a blockchain-enabled cab booking app that ensures safe and transparent transactions using MetaMask.</p>
            <div className="flex justify-center bg-blue-950 text-white text-sm p-2 rounded-md w-[8rem] md:w-[10rem] mx-auto mt-4 hover:cursor-pointer hover:bg-blue-900">
                {loading ? (
                    <Loader />
                ) : (
                    <SignInButton>
                        <div className="flex items-center">
                            <p className="text-xs md:text-base">Get Started</p>
                            <IoIosArrowRoundForward className="ml-1 text-lg sm:text-2xl"/>
                        </div>
                    </SignInButton>
                )}
            </div>
        </section>
    )
}
export default Home