import React from 'react'
import { Route, Switch } from "react-router-dom";
import Index from '../component/updateRestaurant/Index';

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
