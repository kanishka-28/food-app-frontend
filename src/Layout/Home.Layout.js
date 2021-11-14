import React,{useContext,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import FoodTab from '../component/Food_tab'
import OwnerTab from '../component/ownersTab'
import Navbar from '../component/navbar'
import SignApi from '../context/signup'
import { SignupContext } from '../context/signup'
export default function HomeLayout(props) {
  const location = useLocation();
  const {loggedIn } = useContext(SignupContext);
  console.log(JSON.parse(localStorage.getItem("user")));

  return (
    <>
      <div className="container mx-auto lg:px-20">
        <SignApi>
          <Navbar />
        </SignApi>
      </div>
      {
        JSON.parse(!localStorage.getItem("user")) && <FoodTab />
      }
      {
        JSON.parse(localStorage.getItem("user")) && JSON.parse(localStorage.getItem("user")).status === "user" && <FoodTab />
      }
      {
        JSON.parse(localStorage.getItem("user")) && JSON.parse(localStorage.getItem("user")).status === "restaurant" && <OwnerTab />
      }
      <div className="container mx-auto lg:px-20">
        {props.children}

      </div>


    </>
  )
}
