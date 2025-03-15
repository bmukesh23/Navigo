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
        <section className="flex flex-col-reverse md:flex-row justify-between items-center flex-grow">
            <div className="flex flex-col w-full md:w-1/2 p-2 md:p-4 md:ml-10 text-center md:text-left">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-b from-yellow-300 to-yellow-600 text-transparent bg-clip-text">Ride the blockchain revolution</h2>
                <p className="text-xs md:text-base w-[95%] md:w-[80%] lg:w-[70%] px-2 md:px-0 text-gray-400">Navigo is a blockchain-enabled cab booking app that ensures safe and transparent transactions using MetaMask.</p>
                <div className="flex justify-center bg-yellow-600 mx-auto md:mx-0 text-white text-sm p-2 rounded-md w-[8rem] md:w-[10rem] mt-4 hover:cursor-pointer hover:bg-yellow-700">
                    {loading ? (
                        <Loader />
                    ) : (
                        <SignInButton>
                            <div className="flex items-center">
                                <p className="text-xs md:text-base">Get Started</p>
                                <IoIosArrowRoundForward className="ml-1 text-lg sm:text-2xl" />
                            </div>
                        </SignInButton>
                    )}
                </div>
            </div>
            <div className="flex justify-center items-center w-full md:w-1/2 p-4">
                <img src="/home_logo.svg" className="h-[15rem] md:h-[35rem] w-[15rem] md:w-[35rem]" />
            </div>
        </section>
    )
}
export default Home