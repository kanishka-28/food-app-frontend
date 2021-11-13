import axios from "axios"

export const userLogin=async (data)=>{
    
     return await  axios.post("/auth/signin",{
         credentials:  data
         
     });
}