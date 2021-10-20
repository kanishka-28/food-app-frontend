import React from 'react'

//components
import DeliveryFoodCategory from '../carousel/index'


export default function DeliveryCarousel() {
    return (
        <div className="my-6">
        <h1 className="text-xl font-semibold my-3" >Eat what makes you happy</h1>
        <div>
            <DeliveryFoodCategory/>
        </div>
        </div>
    )
}
