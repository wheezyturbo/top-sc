import React from "react";
import "./Navbar.css";
import { NavLink,Link } from "react-router-dom";
import {useEffect} from "react";
export default function Navbar({cart}) {



  return(
    <div className="navbar rounded-box">
  <div className="flex-1 px-2 lg:flex-none">
        <NavLink className="btn btn-ghost text-xl" to="/">
          Home
        </NavLink>
        <input type="checkbox" value="synthwave" className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"/>
  </div> 
  <div className="flex justify-end flex-1 px-2">
    <div className="flex items-stretch">
          <NavLink className="btn btn-ghost text-lg" to="products/">
            Products
          </NavLink>
      
        <div className="dropdown dropdown-end">

          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm indicator-item">{cart.length ?? 0}</span>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">{cart.length} - Items</span>
              <span className="text-info">Subtotal: $999</span>
              <Link to="cart/" className="card-actions"><button className="btn btn-primary btn-block">View cart</button></Link>
            </div>
          </div>
        </div>
    </div>
  </div>
        <div className="divider"></div> 
</div>
  )


//   return (
//     <div className="navbar bg-base-100 sticky top-0 z-10">
//       <div className="flex-1">
//       <input type="checkbox" value="night" className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"/>
//       </div>
//           <div className="flex-1">
// <label className="input input-bordered input-primary flex items-center gap-2 container mx-auto  w-1/2 ">
//         <input type="text" className="grow" placeholder="Search" />
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
//       </label>
//           </div>
//       <div className="flex-none">
//         <div className="dropdown dropdown-end">
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//             <div className="w-10 rounded-full">
//               <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//             </div>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//             <li>
//               <a className="justify-between">
//                 Profile
//                 <span className="badge">New</span>
//               </a>
//             </li>
//             <li><a>Settings</a></li>
//             <li><a>Logout</a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
}

