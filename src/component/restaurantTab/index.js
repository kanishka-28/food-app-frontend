import React, { useState } from 'react'
import { useParams, Link } from "react-router-dom";

const MdTab = () => {

    const { type } = useParams();

    const [allTypes] = useState([
        {
            id: `overview`,
            name: "Overview",
            isActive: false
        },
        {
            id: `order`,
            name: "Order Online",
            isActive: false

        },
        {
            id: `reviews`,
            name: "Reviews",
            isActive: false

        },
        {
            id: `menu`,
            name: "Menu",
            isActive: false

        },
        {
            id: `photos`,
            name: "Photos",
            isActive: false

        },
    ]);

    return (
        <div className="hidden md:flex bg-white border-b pt-3 flex items-start  z-10 w-full text-gray-500">
            {
                allTypes.map((item) => {
                    return (
                        <Link to={`/restaurant/${item.id}`}>

                            <div className={
                                type === item.id || (type === undefined && item.id === "overview") ? " pt-4 pb-2 px-6  text-xl text-zomato-400 border-b-2 border-zomato-400 " : " pt-4 px-6 pb-2  text-lg"
                            } >

                                <h5>{item.name}</h5>
                            </div>
                        </Link>
                    )

                }
                )
            }


        </div>
    )

};

export default function RestaurantTab() {
    return (
        <>
            <div  >
                <MdTab/>
            </div>
        </>
    )
}

//master_url:type
//delivery, dining , nightlife -> type
