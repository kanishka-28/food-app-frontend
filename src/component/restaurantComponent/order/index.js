import React from 'react'
import { GiScooter } from 'react-icons/gi';
import { BsFillArrowRightCircleFill, BsCompass, BsClock, BsCheckCircleFill } from 'react-icons/bs'

import { Link } from 'react-router-dom';

const launchRazorPay = () => {
    let options = {
        key: "rzp_test_vlN9MkaWuTukah",
        amount: 300 * 100,
        currency: "INR",
        name: "Zomato Clone",
        description: "Khaana khaae mote hojaae",
        image: "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
        handler: () => {
            alert("Payment Done")
        },
        theme: { color: "#c4242d" }
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};

export const MobOrder = () => {
    return (
        <>
            <div onClick={launchRazorPay} className="flex bg-red-400 py-4 items-center justify-evenly md:hidden">
                <GiScooter className="w-12 h-12 text-blue-700" />
                <div>
                    <p >Order Online</p>
                    <p className="text-xs text-white bg-blue-600 w-max p-0.5">30% Off</p>
                </div>
                <Link to="/order/page"><BsFillArrowRightCircleFill className="w-6 h-6" /></Link>
            </div>
        </>
    )
}

const LapOrder = () => {
    return (
        <>
            <h1 className="text-xl my-1">Order Online</h1>
            <div className="flex text-sm text-gray-500 items-center mb-3">
                <BsCompass className="my-2 mr-2" />
                <p className="mr-2">Live tracking not available</p>
                <BsClock className="my-2 mr-2" />
                <p className="mr-2">52 min</p>
            </div>
            <div className="flex bg-blue-600 text-white items-center rounded-md p-3 w-max">
                <BsCheckCircleFill className="mr-2" />
                <p>Delivering to :<strong> Block M Market, Near Moti Mahal Greater Kailash Part 1, Bhopal, 110048 </strong></p>
                <div className="pl-36">Change</div>
            </div>
            <div  >
                <button onClick={launchRazorPay} class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
                    Order Food
                </button>
            </div>
        </>
    )
}
const Order = () => {
    return (
        <div className="hidden md:block lg:px-28 ">
            <LapOrder />
        </div>
    )
}

export default Order