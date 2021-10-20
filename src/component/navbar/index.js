import React, { useContext } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { SignupContext } from "../../Context-Api/signup";

import Signup from '../signup';
import Login from '../login';
import { Link } from 'react-router-dom';
const MobileNav = () => {
    return (

        <div className="p-4 md:hidden flex items-center justify-between w-full ">
            <Link to="/">
                <div className="w-28">
                    <img className="w-full h-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" />
                </div>
            </Link>
            <div className="flex items-center gap-3" >
                <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
                    Use App
            </button>
                <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
                    <BiUser />
                </span>
            </div>
        </div>
    )

}
const LgNav = () => {
    const [open, setOpen, loginOpen, setLoginOpen] = useContext(SignupContext);
    // const [open2,setopen2] = useContext(LoginContext);

    return (

        <div className="flex items-center py-4 justify-around w-full text-gray-400 hidden md:flex ">
            <div className="flex justify-around w-9/12 items-center">
                <Link to="/">
                    <div className="w-24 h-6">
                        <img className="w-full h-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" />
                    </div>
                </Link>
                <div className="flex bg-white items-center px-2 gap-3 shadow-md">
                    <div className="flex items-center w-36">
                        <IoLocationSharp className="text-zomato-500" />
                        <input type="text" placeholder="Enter location" name="location" id="location" className="p-2 w-full rounded-md text-md" />
                    </div>
                    <span>|</span>
                    <div className="flex items-center w-80">
                        <AiOutlineSearch />
                        <input type="text" placeholder="Search for restaurant cuisine or a dish " name="location" id="location" className="p-2 rounded-md w-full  text-md" />
                    </div>

                </div>
            </div>
            <div className="flex gap-5" >
                    
                <button onClick={()=>(setLoginOpen(!loginOpen))} >
                    Log In

                    </button>
                <button onClick={() => (setOpen(!open))}>
                    Sign Up

                    </button>


            </div>
        </div>
    )

}
function Navbar() {
    return (
        <>
            <nav >
                <MobileNav />
                <LgNav />
                <Signup/>
                <Login/>
            </nav>

        </>
    )
}

export default Navbar
