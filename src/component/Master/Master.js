import React from 'react'
import { useParams } from "react-router-dom";

//components
import Delivery from '../Delivery/index'
import DiningOut from '../DiningOut';
import Nightlife from '../Nightlife';

export default function Master() {
    const {type} = useParams();
    return (
        <>
        <div className="m-4">
            {type==="delivery" && <Delivery/>}   
        </div>
        <div className="m-4">
            {type==="nightlife" && <Nightlife/>}   
        </div>
        <div className="m-4">
            {type==="dining" && <DiningOut/>}   
        </div>
        </>
    )
}
