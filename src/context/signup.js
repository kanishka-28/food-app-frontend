import React,{createContext,useState,useEffect} from 'react'
import Login from '../component/login';
import Signup from '../component/signup';
import { getRestaurant } from '../services/api';
export const SignupContext= createContext(); 

const SignupApi = (props) => {
    const [open, setOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false)
    let check=false;
    if(localStorage.getItem("token")){
        check=true
    }
    const [loggedIn, setloggedIn] = useState(check);
    const [error, seterror] = useState()
    const [restaurant, setrestaurant] = useState([])
    useEffect(() => {
        
        
        getRestaurant().then((res)=>{
            
            setrestaurant(res.data.restaurants)
            
        }
        ).catch((e)=>{
            console.log(e.response.data);
            seterror(e.response.data.error);
            setTimeout(() => {
                seterror(null)
            }, 5000);
        })
    }, [loggedIn,])
    return (
        <SignupContext.Provider  value={{open,setOpen, loginOpen, setLoginOpen,loggedIn, setloggedIn,restaurant, setrestaurant, error}} >
           <Signup/>
           <Login/>
            {props.children}
        </SignupContext.Provider>
    )
}

export default SignupApi;   
