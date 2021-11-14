import React from 'react'
import { useLocation } from 'react-router-dom'
import FoodTab from '../component/Food_tab'
import Navbar from '../component/navbar'
import SignApi from '../context/signup'

export default function HomeLayout(props) {
  const location = useLocation();
  
    return (
        <>
        <div className="container mx-auto lg:px-20">
          <SignApi>
            <Navbar/>

          </SignApi>
        </div>
        {
          location.pathname!=="/updaterestaurant" && <FoodTab/>
        }
        <div className="container mx-auto lg:px-20">
          {props.children}

        </div>

        
        </>
    )
}
