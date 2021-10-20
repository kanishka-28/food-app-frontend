import React from 'react'
import Brands from '../brands/index'
import Cards from '../cards/index'

//components
import DeliveryComponent from './DeliveryComponent'

export default function Delivery() {
    return (
        <div className="flex flex-col gap-3 ">
            <DeliveryComponent/>
            <Brands/>
            <Cards/>
        </div>
    )
}
