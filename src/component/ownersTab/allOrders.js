import React, {useState, useEffect} from 'react'
import { allOrdersRes, deleteorder } from '../../services/api'

const AllOrders = () => {

    const [state, setstate] = useState(false)
    const [orders, setorders] = useState([])
    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("user"))._id;
        Promise.resolve(allOrdersRes(id)).then((res)=>{
            console.log(res);
            setorders(res.data.getOrders.orderDetails)
            console.log(orders);
        }).catch((e)=>{
            console.log(e.response);
        })
    }, [state])

    return (
        <>
            {orders.length !== 0 ? orders.map((order) => (
                <div className="flex justify-between items-center bg-yellow-100 border border-dashed border-gray-400 p-2 align-center my-2">
                    <div>
                    <p>food item name - {order.food}</p>
                    <p>food item price - {order.itemTotal}</p>
                    <p>food item quantity - {order.quantity}</p>
                       
                    </div>
                    <button onClick={() => {

                    }} class="mt-4 bg-megenta-400 hover:bg-red-700 text-white font-bold py-2 px-8 rounded" onClick={()=>{
                        Promise.resolve(deleteorder(order.restaurant, order._id)).then((res)=>{
                            console.log(res);
                            setstate(!state)
                        }).catch((e)=>{
                            console.log(e);
                        })
                    }}>
                        Delete Order
                    </button>
                </div>
            )) : <div className="flex justify-between items-center bg-yellow-100 border border-dashed border-gray-400 p-2 align-center">
                this restaurant dont have any order
            </div>
            }
        </>
    )
}

export default AllOrders
