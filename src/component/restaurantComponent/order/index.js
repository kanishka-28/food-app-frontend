import React, {useContext} from 'react'
import { GiScooter } from 'react-icons/gi';
import { BsFillArrowRightCircleFill, BsCompass, BsClock, BsCheckCircleFill } from 'react-icons/bs'

import { Link } from 'react-router-dom';

import { Fragment, useRef, useState, useEffect, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FcGoogle } from "react-icons/fc"
import { AiOutlineClose } from "react-icons/ai";
import { orderfood } from '../../../services/api';
import { useHistory } from 'react-router';
import { SignupContext } from '../../../context/signup';

const Order = () => {

    const [price, setprice] = useState()
    const {user} = useContext(SignupContext)
    const placeOrder=()=>{
        const id = user._id
        const orderDetails = {
            restaurant: "618f3e11ad466d30f38d37f4",
            food: "618f40f84ec908776bb129fd",
            quantity: 1,
            itemTotal: 1,
        }
        Promise.resolve(orderfood(orderDetails, id)).then((res)=>{
            console.log(res);
        }).catch((e)=>{
            console.log(e.response);
        })
    }
    const [open, setopen] = useState(false)

    function OrderModal() {
        const cancelButtonRef = useRef(null)

        return (
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setopen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start items-center">

                                        <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left mb-8">
                                            <div className="flex justify-between mb-8">
                                                <Dialog.Title as="h3" className="text-2xl leading-6 font-medium text-gray-700">
                                                   Restaurant Ka Name
                                                </Dialog.Title>
                                                <button type="button" className="text-red-500"
                                                    onClick={() => setopen(false)}
                                                    ref={cancelButtonRef}><AiOutlineClose className="w-6" /></button>
                                            </div>
                                            <div className="mt-2 text-center">
                                                <form className={`my-6`}>
                                                <div className="flex items-center justify-between my-2">
                                                        <p>Food Name - </p>
                                                        <input placeholder="food name" value="food ka name" className="py-4   mx-2 text-center w-3/4 h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" />
                                                    </div>
                                                
                                                    <div className="flex items-center justify-between my-2">
                                                        <p>Quantity - </p>
                                                        <input value="food ka name" type="number" className="py-4   mx-2 text-center w-3/4 h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md"/>
                                                    </div>
                                                <div className="flex items-center justify-between my-2">
                                                        <p>Price Total - </p>
                                                        <input value="200" className="py-4   mx-2 text-center w-3/4 h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" />
                                                    </div>
                                                
                                                </form>                                        
                                                <button className={`border border-gray-300 font-semibold w-full h-12 bg-megenta-400 text-white`} onClick={placeOrder}>Place Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        )
    }

    const MobOrder = () => {
        return (
            <>
                <div onClick={() => setopen(true)} className="flex bg-red-400 py-4 items-center justify-evenly md:hidden">
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
                    <button onClick={() => {
                        setopen(true)
                    }} class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
                        Order Food
                    </button>
                </div>
            </>
        )
    }
    return (
        <div className="hidden md:block lg:px-28 ">
            <LapOrder />
            {(setopen)&&<OrderModal/>}
        </div>
    )
}

export default Order