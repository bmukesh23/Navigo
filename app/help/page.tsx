const Help = () => {
  return (
    <section className="mt-10 px-2 lg:w-1/2 mx-auto mb-8">
        <h2 className="flex justify-center items-center font-semibold text-lg lg:text-2xl text-center">Welcome to Navigo! Get started with these simple steps:</h2>
        <div className="flex flex-col justify-center items-center text-justify w-[70%] mx-auto mt-8 gap-4">
            <p className="font-semibold">Install Metamask: <span className="font-normal">Install and Add the MetaMask extension to your browser from the MetaMask website.</span></p>
            <p className="font-semibold">Connect MetaMask to the App: <span className="font-normal">Open and Connect your MetaMask account to the web app.</span></p>
            <p className="font-semibold">Choose Preferred Location: <span className="font-normal">Enter your source location and destination locations.</span></p>
            <p className="font-semibold">Book a Cab: <span className="font-normal">Select your preferred cab type from the available options and Confirm your booking by clicking <span className="font-semibold">"Pay with MetaMask"</span> button.</span></p>
            <p className="font-semibold">Review and Confirm your Booking: <span className="font-normal">Review the details of your booking and ensure everything is correct in your Metamask and Once again confirm your booking by clicking the <span className="font-semibold">"Confirm"</span> button in the Metamask.</span></p>
        </div>
    </section>
  )
}
export default Help