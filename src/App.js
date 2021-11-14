import './App.css';
import axios from "axios"
import Master from './component/Master/Master';
import Temp from './component/temp';
import HomeHOC from './HOC/Home.HOC';
import RestaurantHOC from './HOC/RestaurantHOC';
import RestaurantMaster from "./component/Master/RestaurantMaster";
import SignupState from './context/signup';
import UpdateRestaurant from './component/updateRestaurant/Index';
import { Route, Switch } from 'react-router-dom';

//axios default settings 
axios.defaults.baseURL = 'http://localhost:4000'; 
axios.defaults.params = {};
function App() {

  //axios default settings
  axios.defaults.baseURL = 'http://localhost:4000';
  axios.defaults.params = {};

  return (
    <>
      <SignupState>
      <HomeHOC path="/" exact component={Temp} />
      <HomeHOC path="/updaterestaurant" exact component={UpdateRestaurant} />
      <HomeHOC key="home" path="/home/:type" exact component={Master} />
      <RestaurantHOC key="restaurant" path="/restaurant/:type/:id" exact component={RestaurantMaster} />           
      
      </SignupState>
    </>
  );
}

export default App;
