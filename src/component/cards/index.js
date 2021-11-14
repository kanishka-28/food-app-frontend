import React,{useState,useContext,useEffect} from 'react'
import { SignupContext } from '../../context/signup';
import { getRestaurant } from '../../services/api';
import FoodCards from './FoodCards';


const AllCards = () => {
        
    
    const {loggedIn,setloggedIn, restaurant, error} = useContext(SignupContext);
   
    return (
        <>
        {
            error? <p className="text-lg text-center bg-red-500 text-white p-4" >{error}</p>
            :
            <>
            <div className="md:hidden mb-24">
                {
                    restaurant.map(oneRestaurant=>{
                       
                        return <FoodCards name={oneRestaurant.name} city={oneRestaurant.city} photos={oneRestaurant.photos} />
                        
                        
                    })
                }
            </div>
            <div className="hidden md:block">
                <div className="flex flex-wrap gap-3 justify-evenly">
                    <div className="w-80 mb-16"><FoodCards /></div>
                    <div className="w-80 mb-16"><FoodCards /></div>
                    <div className="w-80 mb-16"><FoodCards /></div>
                    <div className="w-80 mb-16"><FoodCards /></div>
                    <div className="w-80 mb-16"><FoodCards /></div>
                    <div className="w-80 mb-16"><FoodCards /></div>
                </div>
            </div>
            </>
            }
        </>
    )
}

export default AllCards;