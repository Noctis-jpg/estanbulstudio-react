import React from 'react'
import { Routes, Route, Link, NavLink, Await } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Header() {
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
const [data, setDate] = useState (null);

useEffect(() =>{
  const fetchData = async () => {
    setIsLoading(true);
    try{
      const res = await fetch("http://localhost:1337/api/header-menus");
      const data = await res.json();
      setDate(data);
    }catch (error) {
    setError(error);
}
setIsLoading(false);
};
  fetchData();
}, []);
  
if (isLoading) return <h1>Loading...</h1>
if (error) return <h1>Error: {error.message}</h1>;
 
console.log(data);

  return <nav className='MainNav'>
         
          {data.data.map(item => (
            <NavLink key={item.id} to={item.attributes.link}>{item.attributes.item}</NavLink>
          ))}
       
  </nav>


}



// const Header = () => {
//   return (
//     <>
//     <nav className='MainNav'>
//         <NavLink exact to="/">ANA SAYFA</NavLink>
//         <NavLink to="/portfolio">PORTFOLYO</NavLink>
//         <NavLink to="/studyo-kiralama">STUDİO KİRALAMA</NavLink>
//         <NavLink to="/about">HAKKIMIZDA</NavLink>
//         <NavLink to="/fuacreative-agency">CREATİVE AGENCY</NavLink>
//         <NavLink to="/contact">CONTACT</NavLink>
//     </nav>
//     </>
//   )
// }

//  export default Header