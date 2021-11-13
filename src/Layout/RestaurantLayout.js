import React from 'react'
import RestaurantTab from "../component/restaurantTab";
import Navbar from '../component/navbar'
import RestaurantGallery from '../component/restaurantGallery/index'
import SigninApi from '../context/signup';

export default function RestaurantLayout(props) {
    return (
        <>
        <div className="container mx-auto lg:px-20">
          <SigninApi>

              <Navbar/>

          </SigninApi>
        <RestaurantGallery/>
        <div className="sticky top-0">
          <RestaurantTab  />
        </div>
          {props.children}

        </div>
        
        
        </>
    )
}
