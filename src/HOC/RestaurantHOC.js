import React from 'react'
import { Route } from "react-router-dom";

//layout

import RestaurantLayout from '../Layout/RestaurantLayout';
export default function RestaurantHOC({component:Component, ...rest}) {
    return (
        <>
         <Route 
         {...rest} 
         component={(props)=>(
             <RestaurantLayout>
                 <Component {...props}/>
             </RestaurantLayout>

         )
         } 
         />
        </>
    )
}
