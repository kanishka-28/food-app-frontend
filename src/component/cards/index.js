import React from 'react'
import FoodCards from './FoodCards';

const AllCards = () => {
    return (
        <>
            <div className="md:hidden mb-24">
                <FoodCards />
                <FoodCards />
                <FoodCards />
                <FoodCards />
            </div>
            <div className="hidden md:block">
                <div className="flex flex-wrap gap-3 justify-evenly">
                    <div className="w-80 mb-16"><FoodCards /></div>
                    <div className="w-80 mb-16"><FoodCards /></div>
                    <div className="w-80 mb-16"><FoodCards /></div>
                    <div className="w-80 mb-16"><FoodCards /></div>
                    <div className="w-80 mb-16"><FoodCards /></div>
                    <div className="w-80 mb-16"><FoodCards /></div>
                </div>
            </div>
        </>
    )
}

export default AllCards;