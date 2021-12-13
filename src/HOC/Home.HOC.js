import React from 'react'
import { Route } from "react-router-dom";

//layout

import HomeLayout from '../Layout/Home.Layout';
export default function HomeHOC({component:Component, ...rest}) {
    return (
        <>
         <Route 
         {...rest} 
         component={(props)=>(
             <HomeLayout>
                 <Component {...props}/>
             </HomeLayout>
         )
         } 
         />
        </>
    )
}
