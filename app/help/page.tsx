import { FaDownload, FaPlug, FaMapMarkerAlt, FaTaxi, FaCheckCircle } from 'react-icons/fa';

const Help = () => {
  return (
    <section className="mt-10 px-3 lg:w-1/2 mx-auto mb-8 text-white py-6 rounded-lg shadow-lg">
      <h2 className="flex justify-center items-center font-semibold text-lg lg:text-2xl text-center mb-6">Welcome to Navigo! Get started with these simple steps:</h2>
      <div className="flex flex-col justify-center items-center text-justify w-full mx-auto mt-8 gap-6 text-sm">
        <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg shadow-md w-full">
        <FaDownload className="text-yellow-500 text-2xl" />
          <p className="font-semibold">Install Metamask: <span className="font-normal">Install & add the MetaMask extension to your browser from the MetaMask website.</span></p>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg shadow-md w-full">
          <FaPlug className="text-yellow-500 text-2xl" />
          <p className="font-semibold">Connect MetaMask to the App: <span className="font-normal">Open and connect your MetaMask account to the web app.</span></p>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg shadow-md w-full">
          <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
          <p className="font-semibold">Choose Preferred Location: <span className="font-normal">Enter your source location and destination locations.</span></p>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg shadow-md w-full">
          <FaTaxi className="text-yellow-500 text-4xl" />
          <p className="font-semibold">Book a Cab: <span className="font-normal">Select your preferred cab type from the available options and confirm your booking by clicking <span className="font-semibold">"Pay with MetaMask"</span> button.</span></p>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg shadow-md w-full">
          <FaCheckCircle className="text-yellow-500 text-5xl" />
          <p className="font-semibold">Review and Confirm your Booking: <span className="font-normal">Review the details of your booking and ensure everything is correct in your MetaMask. Once again confirm your booking by clicking the <span className="font-semibold">"Confirm"</span> button in MetaMask.</span></p>
        </div>
      </div>
    </section>
  )
}
export default Help