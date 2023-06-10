import React from 'react';
import {Header2} from '../components/Header2';
import ModelS from '../assets/Desktop-ModelS.jpeg';
import Model3 from '../assets/Desktop-Model3.jpeg';
import ModelX from '../assets/Desktop-ModelX.jpeg';
import ModelY from '../assets/Desktop-ModelY.jpeg';
import Item from '../components/Item';
import Button from './Button';
import { useEffect, useRef, useState } from "react";
import './Shop.css';
import {Menu} from './Menu.js'
import { Outlet, Link } from "react-router-dom";
import E_Tron from '../assets/result.png';
import { useInView } from 'react-intersection-observer';
import {AnimatePresence, easeInOut, motion as m} from "framer-motion"
import { useNavigate } from "react-router-dom";

export function Shop() {
    const { myRef } = useRef();
    const [isActive, setIsActive] = useState(false);
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
      // 👇️ toggle
      setIsActive(current => !current);
    }
    function scrollTo(myRef) {
      myRef.current.scrollIntoView({ behavior: "smooth"});
    };
    function wait(time) {
        return new Promise(resolve => {
          setTimeout(resolve, time);
        });
      };
      
      // this is the routing function
      async function goToPageApp() {
          // it will navigate to the page 500ms after clicing the div
          setShow(!show)
          await wait(300);
          navigate(`/App`);
        };
return (
    <>
    <AnimatePresence>
{show ? (
       <m.div 
       initial={{ opacity: 0}}
animate={{ opacity: 1 }}
transition={{ duration: 0.25, type: 'spring', bounce: 0.0,ease: easeInOut}}
exit={{ opacity: 0, type: 'spring', bounce: 0.0 }}
className='Menu'>
  <nav role="navigation">
  <div id="menuToggle" className='active'>
    <input type="checkbox" onClick={handleClick}/>
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
</m.div>) : null}
    </AnimatePresence>
<AnimatePresence>
{show ? (
<m.div 
initial={{ opacity: 0}}
animate={{ opacity: 1 }}
transition={{ duration: 0.25, type: 'spring', bounce: 0.0,ease: easeInOut}}
exit={{ opacity: 0, type: 'spring', bounce: 0.0 }}
ref={myRef} className='header active' style={{
          filter: isActive ? 'blur(3px)' : '',
        }}>
        <div className='header_logo'>
        <Link onClick={goToPageApp}><img src={E_Tron} alt="E_Tron"/></Link> 
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
    </m.div>) : null}
    </AnimatePresence>
    <AnimatePresence>
  {show ? (
  <m.div 
 initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.25, ease: easeInOut, }}
exit={{ opacity: 0}}
className="app_itemContainer"  style={{
          filter: isActive ? 'blur(3px)' : '',
        }}>
        <div className="section1" ref={myRef}>
            <Item
                title='Lowest Cost Insallations in America'
                desc='Price-match guarantee'
                backgroundImg={ModelS}
                leftBtnText='Order Now'
                leftBtnLink=''
                rightBtnText='Learn More'
                rightBtnLink=''
                twoButtons={true}
                showArrow={true}
                theFooter={false}
                scrollTo={scrollTo}
                goToSectionRef={myRef} />
        </div>
        <div className="section2" ref={myRef}>
            <Item
                title='Solar Roof'
                desc='Money-back guarantee'
                backgroundImg={Model3}
                leftBtnText='Order Now'
                leftBtnLink=''
                rightBtnText='Learn More'
                rightBtnLink=''
                twoButtons={true}
                showArrow={true}
                theFooter={false}
                scrollTo={scrollTo}
                goToSectionRef={myRef} />
        </div>
        <div className="section3" ref={myRef}>
            <Item
                title='Station Selection'
                desc='$455'
                backgroundImg={ModelX}
                leftBtnText='Shop'
                leftBtnLink=''
                rightBtnText='Learn More'
                rightBtnLink=''
                twoButtons={true}
                showArrow={false}
                theFooter={false} />
        </div>
        <div className="section4" ref={myRef}>
            <Item
                title='Station Selection'
                desc='$455'
                backgroundImg={ModelY}
                leftBtnText='Shop'
                leftBtnLink=''
                rightBtnText='Learn More'
                rightBtnLink=''
                twoButtons={true}
                showArrow={false}
                theFooter={true} />
        </div>
    </m.div>
    ) : null}
    </AnimatePresence>
    </>
);
}