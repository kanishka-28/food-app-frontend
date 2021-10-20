import React,{createContext,useState} from 'react'


export const SignupContext= createContext(); 

const SignupApi = (props) => {
    const [open, setOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false)
    return (
        <SignupContext.Provider  value={[open,setOpen, loginOpen, setLoginOpen]} >
            {props.children}
        </SignupContext.Provider>
    )
}

export default SignupApi;   
