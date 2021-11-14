import axios from "axios"

export const userLogin=async (data)=>{
    return await axios.post("/auth/signin",{credentials:  data});
}
export const restLogin=async (data)=>{
    return await axios.post("/restaurant/login",{
        Headers:{
            token: localStorage.getItem('token')
        }
    },{credentials:  data});
}

export const signupApi = (credentials)=>{
    return axios.post("/auth/signup", {credentials})
}
export const addrest = (credentials)=>{
    return axios.post("/restaurant/addrest", credentials)
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