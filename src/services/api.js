import axios from "axios"

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
export const orderfood = async (orderDetails)=>{
    return await axios.post(`/order/new/${orderDetails.id}`, orderDetails, {
        headers:{
            token: localStorage.getItem("token")
        }
    })
}
