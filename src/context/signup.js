import React,{createContext,useState} from 'react'
import Login from '../component/login';
import Signup from '../component/signup';


export const SignupContext= createContext(); 

const SignupApi = (props) => {
    const [open, setOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false)
    let check=false;
    if(localStorage.getItem("token")){
        check=true
    }
    const [loggedIn, setloggedIn] = useState(check)
    return (
        <SignupContext.Provider  value={{open,setOpen, loginOpen, setLoginOpen,loggedIn, setloggedIn}} >
           
           <Signup/>
           <Login/>
            {props.children}
        </SignupContext.Provider>
    )
}

export default SignupApi;   
