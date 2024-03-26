import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import {useState} from "react";
export default function App({cart}){
  return(
  <div className="app">
      <Navbar cart={cart}/> 
      <Outlet/>
  </div>
  )
}
