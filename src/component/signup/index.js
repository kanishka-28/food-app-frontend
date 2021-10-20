import { Fragment, useRef, useState, useEffect,useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import  { SignupContext} from "../../Context-Api/signup";
import { FcGoogle } from "react-icons/fc"
import { AiOutlineClose } from "react-icons/ai";


export default function Signup() {
  const [open, setOpen] = useContext(SignupContext);
  

  const cancelButtonRef = useRef(null)

  const [bgColor, setBgColor] = useState("gray-300")
  const [cursor, setCursor] = useState("not-allowed")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const fName=(e)=>{
    setName(e.target.value)
}
  const fEmail=(e)=>{
    setEmail(e.target.value)
  }

  useEffect(() => {
    if(name.length>5 && email.length>10 && email.includes("@")){
        setBgColor("red-500")
        setCursor("pointer")
    }else{
        setBgColor("gray-300")
        setCursor("not-allowed")
    }
  }, [name, email])


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
                  ref={cancelButtonRef}><AiOutlineClose className="w-6"/></button>
                    </div>
                    <div className="mt-2 text-center">
                      <form className="my-6">
                        <input placeholder="Full Name" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={fName}/>
                        <input placeholder="Email" className="p-4 my-2 w-full h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={fEmail}/>
                      </form>
                      <button className={`border border-gray-300 font-semibold w-full h-12 bg-${bgColor} cursor-${cursor}`}>Create Account</button>
                      <p className="m-4 font-dark text-xl">Or</p>
                      <div className="flex justify-center">
                      <button className="w-full h-12 text-center text-semibold text-lg border-2 border-gray-300 py-1 bg-white flex justify-center items-center gap-2"><FcGoogle className="w-8 h-8"/><p>Continue With Google</p></button>
                      </div>
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