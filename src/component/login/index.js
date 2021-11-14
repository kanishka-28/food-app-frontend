import { Fragment, useRef, useState,useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import  { SignupContext } from "../../context/signup";
import { FcGoogle } from "react-icons/fc"
import { AiOutlineClose } from "react-icons/ai";
import { googleSignin, userLogin,restLogin } from '../../services/api';


export default function Login() {
  const {open, setOpen, loginOpen, setLoginOpen,loggedIn,setloggedIn} = useContext(SignupContext);
  const [status, setStatus] = useState("user");
  
  const [userbtn, setuserbtn] = useState("megenta-400")
  const [resbtn, setresbtn] = useState("megenta-400")
  const cancelButtonRef = useRef(null)
  const [displayuser, setdisplayuser] = useState("block")
  const [displayrest, setdisplayrest] = useState("hidden")
  const [uname, setuname] = useState("")
  const [upass, setupass] = useState("")
  const [rname, setrName] = useState("")
  const [rcity, setrcity] = useState("")
  const [oname, setoname] = useState("")
  const [opass, setopass] = useState("")
  const uName = (e) => {
    setuname(e.target.value)
  }
  const uPass = (e) => {
    setupass(e.target.value)
  }
  const [error, seterror] = useState("")
  const rName = (e) => {
    setrName(e.target.value)
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
  const handleSignInAsUser = () => {
    setStatus("restaurant");
    console.log(status);
    setdisplayuser("block")
    setdisplayrest("hidden")
    setuserbtn("megenta-500")
    setresbtn("megenta-400")
  }
  const handleSignInAsRestaurant = () => {
    setStatus("user");
    setdisplayrest("block")
    console.log(status);
    setdisplayuser("hidden")
    setresbtn("megenta-500")
    setuserbtn("megenta-400")
  }
  const handleUserSignin=(e)=>{
    e.preventDefault()
    userLogin({userName:uname,password:upass}).then((res)=>
    {
      
      localStorage.setItem("token",res.data.token)
      if(res.data.user==="user"){
        setLoginOpen(!loginOpen);
        setloggedIn(true);
        console.log(loggedIn);
      }
      else{
        setLoginOpen(!loginOpen);
        setloggedIn(true);
        //history.push restaurant part
      }
    })
    .catch((e)=>{
      
      console.log(e.response);
      seterror(e.response.data.error);
      setInterval(() => {
        seterror("")
      }, 5000);
      // console.log(e.response)
    })
  }

  const googleLogin= async ()=>{
    await googleSignin().then((res)=>{
      console.log(res);
    }).catch((e)=>{
      seterror(e);
      setInterval(() => {
        seterror("")
      }, 5000);
    })
  }

  return (
    <Transition.Root show={loginOpen} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setLoginOpen}>
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
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:pl-0 md:pl-10">
              <div className="bg-white px-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center mr-0 md:mr-4 mb-8">
                    <div className="flex  justify-between mb-8">
                    <Dialog.Title as="h3" className="text-2xl leading-6 font-medium text-gray-900">
                      Log In
                    </Dialog.Title>
                    <button type="button" className="text-red-500"
                  onClick={() => setLoginOpen(false)}
                  ref={cancelButtonRef}><AiOutlineClose className="w-6"/></button>
                    </div>
                    <div className="mt-2 text-center">
                      <div className="flex gap-4 justify-between text-sm md:text-md" >
                        <button onClick={handleSignInAsUser} className={`bg-${userbtn} w-max md:w-1/2 rounded-lg py-2 px-4 text-white text-sm lg:text-lg hover:bg-megenta-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:border-megenta-300`} >Sign in as User</button>
                          <button onClick={handleSignInAsRestaurant} className={`bg-${resbtn} w-max md:w-1/2 rounded-lg py-2 px-4 text-white text-sm lg:text-lg hover:bg-megenta-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:border-megenta-300`}  >Sign in as Restaurant</button>

                      </div>
                      
                        
                      <form className={`my-6 ${displayuser}`}>
                          <input placeholder="Full Name" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={uName} value={uname} />
                          <input type="password" placeholder="Password" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={uPass} value={upass} />
                      <button onClick={handleUserSignin} className={`border border-gray-300 rounded-md font-semibold w-full h-12 bg-megenta-400 text-white`}>Sign in </button>
                      <div className="h-10" >
                          <p className="text-md" >{error}</p>

                      </div>
                        </form>
                        <form className={`my-6 ${displayrest}`}>
                          <h1 className="text-2xl font-semibold my-6 flex flex-start">Restaurant Details</h1>
                          <input placeholder="Restaurant Name" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={rName} />
                          <input placeholder="City" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={rCity}/>
                          
                          
                          <h1 className="text-2xl font-semibold my-6 flex flex-start">Restaurant Owner Details</h1>
                          <input placeholder="Full Name" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={oName} />
                          <input placeholder="Password" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={oPass} />
                      <button className={`border border-gray-300 rounded-md font-semibold w-full h-12 bg-megenta-400 text-white`}>Sign in</button>
                          
                        </form>
                         
                      
                      <p className="m-4 font-dark text-xl">Or</p>
                      <button onClick={googleLogin} className="w-full h-12 text-center text-semibold text-lg border border-gray-300 py-1 bg-white flex justify-center items-center gap-2"><FcGoogle className="w-8 h-8"/><p>Login With Google</p></button>
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