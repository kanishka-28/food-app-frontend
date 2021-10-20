import { combineReducers } from "redux";

import restaurant from './Restaurant/Restaurant.reducer'

const rootReducer = combineReducers({restaurant});

export default rootReducer;