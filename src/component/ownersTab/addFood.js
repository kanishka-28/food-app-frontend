import React, {useState, useEffect, useContext} from 'react'
import { addfood } from '../../services/api'
import { SignupContext } from '../../context/signup'
const AddFood = () => {

    const [food, setfood] = useState("")
    const [des, setdes] = useState("")  
    const [category, setcategory] = useState("")
    const [price, setprice] = useState(false)
    const [isVeg, setisVeg] = useState(false)
    const [isContainEgg, setisContainEgg] = useState(false)


    const clickHandler=()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        console.log();
        Promise.resolve(addfood({
            name: food,
            descript: des,
            isVeg ,
            isContainEgg,
            category: category,
            price: price
        }, user._id)).then((res)=>{
            console.log(res);
            setfood("")
            setcategory("")
            setprice("")
            setdes("")
            setisContainEgg(false)
            setisVeg(false)
        }).catch((e)=>{
            console.log(e.response);
        })
    }

    return (
        <div className="py-4 flex">
            <div className="flex flex-col items-center py-2 border-2 border-gray-300 shadow-lg mx-auto w-full md:w-2/3 lg:w-1/3 h-2/3 inner-shadow bg-white">
                <div className="flex items-center justify-between my-2 w-3/4">
                    <p>name</p>
                    <input value={food}  className="py-4   mx-2 text-center w-3/4 h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={(e)=>{
                      setfood(e.target.value)
                    }}/>
                </div>
                <div className="flex items-center justify-between my-2 w-3/4">
                    <p>descript</p>
                    <input value={des} className="py-4   mx-2 text-center w-3/4 h-28 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={(e)=>{
                      setdes(e.target.value)
                    }}/>
                </div>
                <div className="flex items-center justify-between my-2 w-3/4">
                    <p>category</p>
                    <input value={category} className="py-4   mx-2 text-center w-3/4 h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border border-gray-300 rounded-md" onChange={(e)=>{
                      setcategory(e.target.value)
                    }}/>
                </div>
                <div className="flex items-center justify-between my-2 w-3/4">
                    <p>price</p>
                    <input value={price} type="number" className="py-4   mx-2 text-center w-3/4 h-12 focus:border-none focus:outline-none focus:ring-1 focus:ring-black  border bo der-gray-300 rounded-md" onChange={(e)=>{
                      setprice(e.target.value)
                    }}/>
                </div>
                <div className="flex items-center justify-evenly my-2 w-3/4">
                    <p>isVeg</p>
                    <input type="checkbox" className="py-4 mx-2 text-center w-6 h-12 focus:border-none focus:outline-none border border-gray-300 rounded-md" onClick={(e)=>{
                      setisVeg(!isVeg)
                    }}/>
                </div>
                <div className="flex items-center justify-evenly my-2 w-3/4">
                    <p>isContainEgg</p>
                    <input type="checkbox" className="py-4 mx-2 text-center w-6 h-12 focus:border-none focus:outline-none border border-gray-300 rounded-md" onClick={(e)=>{
                      setisContainEgg(!isContainEgg)
                    }}/>
                </div>
                <button class="mt-4 w-40 bg-megenta-400 hover:bg-red-700 text-white font-bold py-2 px-8 rounded" onClick={clickHandler}>
                    Order Food
                </button>
            </div>
        </div>
    )
}

export default AddFood
