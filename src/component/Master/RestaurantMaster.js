// import React from 'react'
// import  Map from "../restaurantComponent/overview/googleMap";
// export const RestaurantMaster = () => {
//     return (
//         <div>
//             hehe
//             <Map/>
//         </div>
//     )
// }
import React from "react";
import { useParams } from "react-router-dom";

//Components

import Menu from "../restaurantComponent/menu/"
import Overview from "../restaurantComponent/overview/"
import Order from "../restaurantComponent/order"
import Reviews from "../restaurantComponent/reviews"
import Photos from "../restaurantComponent/photos"

const Master = () => {
  const { type } = useParams();

  return (<>
    <div className="m-4">
    {type === "overview" && <Overview /> }
    {type === "menu" && <Menu /> }
    {type === "order" && <Order /> }
    {type === "reviews" && <Reviews /> }
    {type === "photos" && <Photos /> }
    </div>
    </>);
};

export default Master;