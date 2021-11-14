import React,{useState,useContext,useEffect} from 'react'
import { SignupContext } from '../../context/signup';
import { getRestaurant } from '../../services/api';
import FoodCards from './FoodCards';


const AllCards = () => {
        
    
    const {loggedIn,setloggedIn, restaurant, error} = useContext(SignupContext);
   console.log(restaurant);
    return (
        <>
        {
            error? <p className="text-lg text-center bg-red-500 text-white p-4" >{error}</p>
            :
            <>
            <div className="md:hidden mb-24">
                {
                    restaurant.map(oneRestaurant=>{
                       console.log(oneRestaurant);
                        return <FoodCards name={oneRestaurant.name} city={oneRestaurant.city} photos={oneRestaurant.photos} about={oneRestaurant._id} />
                        
                        
                    })
                }
            </div>
            <div className="hidden md:block">
                <div className="w-full flex  flex-wrap gap-3 justify-evenly">
                
                {
                    restaurant.map(oneRestaurant=>{
                       
                        return (
                            <div className="w-1/4">

                                <FoodCards name={oneRestaurant.name} city={oneRestaurant.city} photos={oneRestaurant.photos} about={oneRestaurant._id} />
                            </div>
                        )
                        
                        
                    })
                }
            </div>
                </div>
            
            </>
            }
        </>
    )
}

export default AllCards;