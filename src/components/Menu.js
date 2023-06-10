import React from 'react';
import NavLinks from './NavLinks.js'
import './Menu.css';
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import {useState} from 'react'
export const Menu = () => {
    return(
<>
    <nav role="navigation">
  <div id="menuToggle">
  
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a href="#"><li>Charging Stations</li></a>
      <a href="#"><li>Solar Panels</li></a>
      <a href="#"><li>Shop</li></a>
      <a href="#"><li>Careers</li></a>
      <a href="#"><li>Our Future</li></a>
      <a href="#"><li></li></a>
    </ul>
  </div>
</nav>
</>
)}
