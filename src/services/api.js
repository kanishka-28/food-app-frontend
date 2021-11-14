import axios from "axios"
import { Router } from "react-router-dom";

export const userLogin=async (data)=>{
    return await axios.post("/auth/signin",{credentials:  data});
}
export const restLogin=async (data)=>{
    return await axios.post("/restaurant/login",{credentials:  data},{
        headers:{
            token: localStorage.getItem('token')
        }
    });
}
export const signupApi = (credentials)=>{
    return axios.post("/auth/signup", {credentials})
}
export const addrest = (credentials)=>{
    return axios.post("/restaurant/addrest", credentials)
}
export const orderfood = async (orderDetails, id)=>{
    return await axios.post(`/order/new/${id}`, {orderDetails}, {
        headers:{
            token: localStorage.getItem("token")
        }
    })
}
export const googleSignin=()=>{
    return axios.get("/auth/google",{ headers: { 'Content-Type': 'application/json'}});
}

export const getRestaurant=()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPos);
    }
    let x,y
    function showPos(position){
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
         x=position.coords.latitude
         y=position.coords.longitude
        
        
    }
    return axios.get("/restaurant",{
        headers: {token: localStorage.getItem("token")},
        params:{
            latitude:x,
            longitude:y
        }
    })
}


export const updateRes=(data)=>{
    console.log(data);
    return axios.put(`restaurant/updaterestaurant/${data.id}`,data,{
        headers:{
            token: localStorage.getItem("token")
        }
    })
}