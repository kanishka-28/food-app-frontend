import React,{createContext,useState} from 'react'
import Login from '../component/login';
import Navbar from '../component/navbar';
import Signup from '../component/signup';


export const SignupContext= createContext(); 

const SignupApi = (props) => {
    const [open, setOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false)
    const [loggedIn, setloggedIn] = useState(true)
    return (
        <SignupContext.Provider  value={{open,setOpen, loginOpen, setLoginOpen,loggedIn, setloggedIn}} >
           
           <Signup/>
           <Login/>
            {props.children}
        </SignupContext.Provider>
    )
}

export default SignupApi;   
