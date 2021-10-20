import { GET_RESTAURANT } from "./Restaurant.type";

const INITIAL_STATE={
    restaurant:[]
}

const restaurantReducer= (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_RESTAURANT:
            return{
                ...state,
                restaurants: action.payload
            }
            default:
                return{
                    ...state
                }
    }
}

export default restaurantReducer;