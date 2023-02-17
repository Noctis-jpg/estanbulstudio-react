import React from 'react'
import { NavLink } from "react-router-dom";
import useFetch from '../hooks/useFetch';

export default function Header() {

const {isLoading, error, data} =  useFetch(
  "http://localhost:1337/api/header-menus"
  );
  
if (isLoading) return <h1>Yükleniyor...</h1>
if (error) return <h1>Hata: {error.message}</h1>;
 
console.log(data);

  return (
          <div className='container-fluid'>
            <div className='row CapsulLogoandNav'>
              <div className='col-lg-2'>
            <div className='Logo'>
              <img width={"35%"} className='img-fluid' src='http://localhost:1337/uploads/Estanbul_Studyo_1873fab4d6.png?updated_at=2023-02-11T17:37:56.140Z'></img>
            </div>
            </div>
            <div className='col-lg-10 d-flex align-items-center'>
         <nav className='MainNav'>         
          {data.data.map(item => (
            <NavLink key={item.id} to={item.attributes.link}>{item.attributes.item}</NavLink>
          ))}</nav></div></div></div>


)}



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