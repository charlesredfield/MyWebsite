import './Header.css'
import React, { useState } from 'react'
import E_Tron from '../assets/result.png';
import { useInView } from 'react-intersection-observer';
import { Outlet, Link } from "react-router-dom";
import {Menu} from './Menu.js'
import Button from './Button';
export const Header = () => {
    
  return (
  
          <div  className='header'>
        <div className='header_logo'>
        <Link to={`/App`}><img src={E_Tron} alt="E_Tron"/></Link> 
        </div>
        <div className='header_center'>
          <Link href="#" className='link' to={`/ChargingStations`}>Charging Stations</Link>  
          <Link href="#" className='link' to={`/SolarPanels`}>Solar Panels</Link>   
          <Link href="#" className='link' to={`/OurFuture`}>Our Future</Link>     
          <Link href="#" className='link' to={`/Shop`}>Shop</Link>  
          <Link href="#" className='link' to={`/Account`}>Account</Link>   
          <Link href="#" className='link' to={`/Careers`}>Careers</Link> 
          <Link href="#" className='link' to={`/Contact Us`}>Contact Us</Link>    
       <div class="animation start-home"></div>
        </div>
    </div>
    
  )}
    

