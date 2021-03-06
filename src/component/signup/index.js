import { Fragment, useRef, useState, useEffect, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { SignupContext } from "../../context/signup";
import { FcGoogle } from "react-icons/fc"
import { AiOutlineClose } from "react-icons/ai";
import { addrest, signupApi } from '../../services/api';
import { useHistory } from 'react-router';

export default function Signup() {
  const {open, setOpen,loginOpen, setLoginOpen,loggedIn, setloggedIn,specificRestaurant, setsepecificRestaurant,setuser } = useContext(SignupContext);
  const cancelButtonRef = useRef(null)
  const [status, setStatus] = useState("user");
  const [bgColor, setBgColor] = useState("gray-300")
  const [userbtn, setuserbtn] = useState("megenta-400")
  const [resbtn, setresbtn] = useState("megenta-400")
  const [cursor, setCursor] = useState("not-allowed")
  const [displayuser, setdisplayuser] = useState("block")
  const [displayrest, setdisplayrest] = useState("hidden")
  const [uname, setuname] = useState("")
  const [upass, setupass] = useState("")
  const [uaddress, setuaddress] = useState("")
  const [ucity, setucity] = useState("")
  const [rname, setrName] = useState("")
  const [rpass, setrpass] = useState("")
  const [rphone, setrphone] = useState("")
  const [raddress, setraddress] = useState("")
  const [rcity, setrcity] = useState("")
  const [oname, setoname] = useState("")
  const [opass, setopass] = useState("")
  const [oemail, setoemail] = useState("")
  const [latit, setlatit] = useState("")
  const [longi, setlongi] = useState("")
  const [error, seterror] = useState("")
  const history = useHistory();
  const uName = (e) => {
    setuname(e.target.value)
  }
  const uPass = (e) => {
    setupass(e.target.value)
  }
  const uAddress = (e) => {
    setuaddress(e.target.value)
  }
  const uCity = (e) => {
    setucity(e.target.value)
  }

  const rName = (e) => {
    setrName(e.target.value)
  }
  const rPass = (e) => {
    setrpass(e.target.value)
  }
  const rPhone = (e) => {
    setrphone(e.target.value)
  }
  const rAddress = (e) => {
    setraddress(e.target.value)
  }
  const rCity = (e) => {
    setrcity(e.target.value)
  }
  const oName = (e) => {
    setoname(e.target.value)
  }
  const oPass = (e) => {
    setopass(e.target.value)
  }
  const oEmail = (e) => {
    setoemail(e.target.value)
  }
  const Latit = (e) => {
    setlatit(e.target.value)
  }
  const Longi = (e) => {
    setlongi(e.target.value)
  }
  const handleSignUpAsUser = () => {
    setStatus("user");
    console.log(status);
    setdisplayuser("block")
    setdisplayrest("hidden")
    setuserbtn("megenta-500")
    setresbtn("megenta-400")
  }
  const handleSignUpAsRestaurant = () => {
    setStatus("restaurant");
    setdisplayrest("block")
    console.log(status);
    setdisplayuser("hidden")
    setresbtn("megenta-500")
    setuserbtn("megenta-400")
  }
  const clickHandler=(e)=>{
    e.preventDefault();
    if(status==="user"){
      const credentials = {
        userName: uname, 
        password: upass, 
        address: uaddress, 
        city: ucity,
        status: status
      }
      Promise.resolve(signupApi(credentials)).then((res)=>{
        // console.log(res);
        localStorage.setItem("token", res.data.token)
        setloggedIn(true)
        setuser(res.data.details)
        setOpen(false)
        window.location.reload();
      }).catch((e)=>{
        // console.log(e.response);
        seterror(e.response.data.error);
        setTimeout(() => {
          seterror("")
        }, 5000);
      })
    }
    if(status==="restaurant"){
      const credentials = {
        userName: oname, 
        password: opass,  
        email: oemail,
        status: status
      }
      Promise.resolve(addrest({
        name: rname,
        contactNumber: rphone,
        address: raddress, 
        city: rcity,
        mapLocation : {
          latitude: latit,
          longitude: longi
        }
      })).then((res1)=>{
        console.log(res1);
        localStorage.setItem("restaurant",JSON.stringify(res1.data.result));
        Promise.resolve(signupApi(credentials)).then((res2)=>{
          console.log(res2);
          localStorage.setItem("token", res2.data.token)
          setloggedIn(true)
          setuser(res2.data.details)
          setOpen(false)
          window.location.reload();
        }).catch((e)=>{
          console.log(e.response);
        })
      }).catch((e)=>{
        console.log(e.response);
      })
      }
    }

    // useEffect(() => {
    //   if (name.length > 5 && pass.length > 10 && pass.includes("@")) {
    //     setBgColor("red-500")
    //     setCursor("pointer")
    //   } else {
    //     setBgColor("gray-300")
    //     setCursor("not-allowed")
    //   }
    // }, [name, pass])


    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                  <div className="sm:flex sm:items-start">

                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left mb-8">
                      <div className="flex justify-between mb-8">
                        <Dialog.Title as="h3" className="text-2xl leading-6 font-medium text-gray-900">
                          Sign UP
                        </Dialog.Title>
                        <button type="button" className="text-red-500"
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}><AiOutlineClose className="w-6" /></button>
                      </div>
                      <div className="mt-2 text-center">
                        <div className="flex justify-between">
                          <button onClick={handleSignUpAsUser} className={`bg-${userbtn} w-max md:w-1/3 rounded-lg p-4 text-white text-sm lg:text-lg hover:bg-megenta-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:border-megenta-300`} >Sign up as User</button>
                          <button onClick={handleSignUpAsRestaurant} className={`bg-${resbtn} w-max md:w-1/3 rounded-lg p-4 text-white text-sm lg:text-lg hover:bg-megenta-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:border-megenta-300`}  >Sign up as Restaurant</button>
                        </div>
                        <form className={`my-6 ${displayuser}`}>
                          <input placeholder="Full Name" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={uName} />
                          <input type="password" placeholder="Password" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={uPass}/>
                          <input placeholder="Address" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={uAddress} />
                          <input placeholder="City" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={uCity} />
                        </form>
                        <form className={`my-6 ${displayrest}`}>
                          <h1 className="text-2xl font-semibold my-6 flex flex-start">Restaurant Details</h1>
                          <input placeholder="Restaurant Name" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={rName} />
                          <input type="tel" placeholder="Contact Number" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={rPhone} />
                          <input placeholder="Address" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={rAddress} />
                          <input placeholder="City" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={rCity} />
                          <div className="flex items-center">
                            <p>Map Location - </p>
                            <input placeholder="Latitude" className="p-4 m-2 w-1/4 h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={Latit}/>
                            <input placeholder="Longitude" className="p-4 m-2 w-1/4 h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={Longi}/>
                          </div>                            
                          <h1 className="text-2xl font-semibold my-6 flex flex-start">Restaurant Owner Details</h1>
                          <input placeholder="Full Name" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={oName} />
                          <input type="password" placeholder="Password" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={oPass} />
                          <input placeholder="Email" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={oEmail} />
                        </form>
                        <p className="text-md" >{error}</p>
                        <button className={`border border-gray-300 font-semibold w-full h-12 bg-${bgColor} `} onClick={clickHandler}>Create Account</button>
                        
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