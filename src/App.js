import './App.css';
import axios from "axios"
import Master from './component/Master/Master';
import Temp from './component/temp';
import HomeHOC from './HOC/Home.HOC';
import RestaurantHOC from './HOC/RestaurantHOC';
import RestaurantMaster from "./component/Master/RestaurantMaster";
import Login from './component/login/index'
import Signup from './component/signup/index'
import SignupApi from './context/signup';
function App() {

  //axios default settings
  axios.defaults.baseURL = 'http://localhost:4000';
  axios.defaults.params = {};

  return (
    <>
      <SignupApi>
      <HomeHOC path="/" exact component={Temp} />
      <HomeHOC key="home" path="/home/:type" exact component={Master} />
      <RestaurantHOC key="restaurant" path="/restaurant/:type" exact component={RestaurantMaster} />           
      </SignupApi>
    </>
  );
}

export default App;
