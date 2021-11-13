import axios from "axios"

export const userLogin=async (data)=>{
    
     return await  axios.post("/auth/signin",{
         credentials:  data
         
     });
}


export const signupApi = (credentials)=>{
    return axios.post("/auth/signup", {credentials})
}
export const addrest = (credentials)=>{
    return axios.post("/restaurant/addrest", credentials)
}
