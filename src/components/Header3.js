import './Header.css'
import React, { useState } from 'react'
import E_Tron from '../assets/result2.png';
import { useInView } from 'react-intersection-observer';
import { Outlet, Link } from "react-router-dom";
import {Menu} from './Menu.js'
import Button from './Button';
export const Header3 = () => {
    
  return (
  
          <div  className='header3'>
        <div className='header_logo'>
        <Link to={`/App`}><img src={E_Tron} alt="E_Tron"/></Link> 
        </div>
        <div className='header_center'>
          <Link href="#" className='link1' to={`/ChargingStations`}>Charging Stations</Link>  
          <Link href="#" className='link1' to={`/SolarPanels`}>Solar Panels</Link>   
          <Link href="#" className='link1' to={`/OurFuture`}>Our Future</Link>     
          <Link href="#" className='link1' to={`/Shop`}>Shop</Link>  
          <Link href="#" className='link1' to={`/Account`}>Account</Link>   
          <Link href="#" className='link1' to={`/Careers`}>Careers</Link> 
          <Link href="#" className='link1' to={`/Contact Us`}>Contact Us</Link>    
       <div class="animation start-home"></div>
        </div>
    </div>
    
  )}