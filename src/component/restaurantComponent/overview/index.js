import React, { useState } from 'react'
import GoogleMap from './googleMap';
import { FiCheckCircle, FiCopy } from "react-icons/fi"
import { RiDirectionLine, RiArrowUpSFill } from "react-icons/ri"

const OverviewSm= ()=>{
    const [color, setColor] = useState("text-gray-500")
    const address = "Shop 1, Chatrapati Shivaji Colony, Chuna Bhatti, Arera Colony, Bhopal";
    const copy = () => {
        setColor("text-green-500")
        navigator.clipboard.writeText(address);
        setTimeout(() => (
            setColor("text-gray-500")
        ), [1000])
    }

    const [display, setDisplay] = useState("hidden")
    const quesBoxShow = () => {
        setDisplay("block")
    }
    const quesBoxHide = () => {
        setDisplay("hidden")
    }

    return(
        <div className="md:hidden  justify-between w-full">
            <div className="flex w-full justify-between  flex flex-col-reverse ">
                <div>
                    <h1 className="font-semibold text-2xl">About this place</h1>
                    <div className="flex justify-between">
                        <div className="flex border rounded-md border-gray-300 py-3 my-2">
                            <img src="https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png" alt="safety" className="w-8 h-8 mx-2" />
                            <div>
                                <p className="text-xs font-light text-gray-500 pr-2">RESTAURANT SAFETY MEASURE</p>
                                <p className="text-gray-600">Well Sanitized Kitchen</p>
                            </div>
                        </div>
                        <div className="flex border rounded-md border-gray-300 py-3 m-2">
                            <img src="https://b.zmtcdn.com/data/o2_assets/8ecc61badb80ea685f0afc71a4d721671585754288.png" alt="safety" className="w-8 h-8 mx-2" />
                            <div>
                                <p className="text-xs font-light text-gray-500 pr-2">RESTAURANT SAFETY MEASURE</p>
                                <p className="text-gray-600">Daily Temp. Checks</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className="my-4 mb-6 mx-1">
                            <h1 className="text-xl my-1">Average Cost</h1>
                            <p className="font-light text-lg">Rs 200 for two people (approx.)</p>
                            <p className="text-sm text-gray-400">Exclusive of applicable taxes and charges, if any</p>
                            <div className="">
                            <p className="text-xs text-gray-300 border border-dashed border-gray-300 w-max pb-0.5 mt-1 mb-2  cursor-pointer" id="ques" onMouseOver={quesBoxShow} onMouseOut={quesBoxHide} >How do we calculate cost for two?</p>
                            <div className={`w-52 h-40 bg-gray-800 text-white absolute z-10 ${display} text-center p-2 text-sm`}><RiArrowUpSFill className="absolute b-56 l-24"/>The cost for two is computed as follows: 2 desserts + 2 beverages. The actual cost you incur at a restaurant might change depending on your appetite, or with changes in restaurant menu prices.</div>
                            </div>
                            <p className="font-light text-lg">Digital payments accepted</p>
                        </div>
                        <h1 className="text-xl my-1">More Info</h1>
                        <div className="flex ">
                            <div className="mr-16">
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800"> Home</p></p>
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800"> Vegetarian</p></p>
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800"> Serves  Food</p></p>
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800"> Self</p></p>
                            </div>
                            <div className="ml-16">
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800"> Takeaway</p></p>
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800">Desserts Bakes</p></p>
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800"> Indoor</p></p>
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800">Free Wifi</p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-80 mx-auto border-2 border-gray-100 shadow-md rounded-xl">
                    <div className="w-full">
                        <div className="my-3 mx-2">
                            <p className="text-xl text-gray-700 mb-2">Call</p>
                            <p className="text-red-500">6353728210</p>
                            <p className="text-red-500">6353728210</p>
                        </div>
                        <div className="h-2/3 my-1 mx-2 ">
                            <p className="text-xl text-gray-700 mb-2">Direction</p>
                            <div className="h-52">
                                <GoogleMap className="" />
                            </div>
                        </div>
                        <div className="my-2 mx-2">
                            <h1 className="text-gray-600 mb-4">{address}</h1>
                            <div className="flex">
                                <button onClick={copy} className={` w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-white flex justify-center items-center gap-2 cursor-pointer ${color}`} id="copy"><FiCopy className="w-5 h-5" /><p>Copy</p></button>
                                <button className="w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-white text-red-500 flex justify-center items-center gap-2"><RiDirectionLine className="w-5 h-5" /><p>Direction</p></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const OverviewMd=()=>{
    const [color, setColor] = useState("text-gray-500")
    const address = "Shop 1, Chatrapati Shivaji Colony, Chuna Bhatti, Arera Colony, Bhopal";
    const copy = () => {
        setColor("text-green-500")
        navigator.clipboard.writeText(address);
        setTimeout(() => (
            setColor("text-gray-500")
        ), [1000])
    }

    const [display, setDisplay] = useState("hidden")
    const quesBoxShow = () => {
        setDisplay("block")
    }
    const quesBoxHide = () => {
        setDisplay("hidden")
    }

    return(
        <div className="hidden md:flex justify-between w-full ">
            <div className="flex w-full justify-between ">
                <div>
                    <h1 className="font-semibold text-2xl">About this place</h1>
                    <div className="flex justify-betwen">
                        <div className="flex border rounded-md border-gray-300 py-3 my-2">
                            <img src="https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png" alt="safety" className="w-8 h-8 mx-2" />
                            <div>
                                <p className="text-xs font-light text-gray-500 pr-2">RESTAURANT SAFETY MEASURE</p>
                                <p className="text-gray-600">Well Sanitized Kitchen</p>
                            </div>
                        </div>
                        <div className="flex border rounded-md border-gray-300 py-3 m-2">
                            <img src="https://b.zmtcdn.com/data/o2_assets/8ecc61badb80ea685f0afc71a4d721671585754288.png" alt="safety" className="w-8 h-8 mx-2" />
                            <div>
                                <p className="text-xs font-light text-gray-500 pr-2">RESTAURANT SAFETY MEASURE</p>
                                <p className="text-gray-600">Daily Temp. Checks</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className="my-4 mb-6 mx-1">
                            <h1 className="text-xl my-1">Average Cost</h1>
                            <p className="font-light text-lg">Rs 200 for two people (approx.)</p>
                            <p className="text-sm text-gray-400">Exclusive of applicable taxes and charges, if any</p>
                            <div className="">
                            <p className="text-xs text-gray-300 border border-dashed border-gray-300 w-max pb-0.5 mt-1 mb-2  cursor-pointer" id="ques" onMouseOver={quesBoxShow} onMouseOut={quesBoxHide} >How do we calculate cost for two?</p>
                            <div className={`w-52 h-40 bg-red-500 text-white absolute z-10 ${display} text-center p-2 text-sm`}><RiArrowUpSFill className="absolute b-56 l-24"/>The cost for two is computed as follows: 2 desserts + 2 beverages. The actual cost you incur at a restaurant might change depending on your appetite, or with changes in restaurant menu prices.</div>
                            </div>
                            <p className="font-light text-lg">Digital payments accepted</p>
                        </div>
                        <h1 className="text-xl my-1">More Info</h1>
                        <div className="flex ">
                            <div className="mr-16">
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800"> Home</p></p>
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800"> Vegetarian</p></p>
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800"> Serves  Food</p></p>
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800"> Self</p></p>
                            </div>
                            <div className="ml-16">
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800"> Takeaway</p></p>
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800"> Desserts Bakes</p></p>
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800"> Indoor</p></p>
                                <p className="flex items-center my-2"><FiCheckCircle className="text-green-600 w-5 h-5 mr-2" /><p className="font-light text-gray-800">Free Wifi</p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-96 border-2 border-gray-100 shadow-md rounded-xl">
                    <div className="w-full">
                        <div className="my-3 mx-8">
                            <p className="text-xl text-gray-700 mb-2">Call</p>
                            <p className="text-red-500">6353728210</p>
                            <p className="text-red-500">6353728210</p>
                        </div>
                        <div className="h-2/3 my-1 mx-8">
                            <p className="text-xl text-gray-700 mb-2">Direction</p>
                            <div className="h-52">
                                <GoogleMap className="" />
                            </div>
                        </div>
                        <div className="my-2 mx-8">
                            <h1 className="text-gray-600 mb-4">{address}</h1>
                            <div className="flex">
                                <button onClick={copy} className={` w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-white flex justify-center items-center gap-2 cursor-pointer ${color}`} id="copy"><FiCopy className="w-5 h-5" /><p>Copy</p></button>
                                <button className="w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-white text-red-500 flex justify-center items-center gap-2"><RiDirectionLine className="w-5 h-5" /><p>Direction</p></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Overview = () => {

   
    return (
        <>
            <OverviewMd/>
            <OverviewSm/>
        </>
    )
}

export default Overview;