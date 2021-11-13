import { Fragment, useRef, useState,useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import  { SignupContext } from "../../Context-Api/signup";
import { FcGoogle } from "react-icons/fc"
import { AiOutlineClose } from "react-icons/ai";

export default function Login() {
  const {open, setOpen, loginOpen, setLoginOpen} = useContext(SignupContext);
  console.log("login Open :"+loginOpen)

  const cancelButtonRef = useRef(null)

  const [bgColor, setBgColor] = useState("gray-300")
  const [cursor, setCursor] = useState("not-allowed")
  const sendOTP = (e) => {
     e.target.value.length === 10 ? setBgColor("red-500") : setBgColor("gray-300") 
     e.target.value.length === 10 ? setCursor("pointer") : setCursor("not-allowed") 
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

                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left mb-8">
                    <div className="flex justify-between mb-8">
                    <Dialog.Title as="h3" className="text-2xl leading-6 font-medium text-gray-900">
                      Log In
                    </Dialog.Title>
                    <button type="button" className="text-red-500"
                  onClick={() => setLoginOpen(false)}
                  ref={cancelButtonRef}><AiOutlineClose className="w-6"/></button>
                    </div>
                    <div className="mt-2 text-center">
                      <form className="flex my-6 border border-gray-300 rounded-md">
                        <select id="cars" name="🈯+91" className=" w-16 h-10">
                          <option value="">+91</option>
                          <option value="">+00</option>
                          <option value="">+44</option>
                          <option value="">+121</option>
                          <option value="">+90</option>
                          <option value="">+363</option>
                        </select>
                        <input placeholder="phone-number" className="px-14 w-5/6 h-10 focus:border-none focus:outline-none focus:ring-1 focus:ring-black" onChange={sendOTP}/>
                      </form>
                      <button className={`border border-gray-300 rounded-md font-semibold w-full h-12 bg-${bgColor} cursor-${cursor}`}>Send OTP</button>
                      <p className="m-4 font-dark text-xl">Or</p>
                      <button className="w-full h-12 text-center text-semibold text-lg border border-gray-300 py-1 bg-white flex justify-center items-center gap-2"><FcGoogle className="w-8 h-8"/><p>Login With Google</p></button>
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