import React from 'react'
import FoodTab from '../component/Food_tab'
import Navbar from '../component/navbar'
import SignApi from '../context/signup'

export default function HomeLayout(props) {
    return (
        <>
        <div className="container mx-auto lg:px-20">
          <SignApi>
            <Navbar/>

          </SignApi>
        </div>
        <FoodTab/>
        <div className="container mx-auto lg:px-20">
          {props.children}

        </div>

        
        </>
    )
}
