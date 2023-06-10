import React from 'react';
import {Header3} from './Header3';
import {Menu} from './Menu';
import './SolarPanels.css';
import {AnimatePresence, easeInOut, motion as m} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Shop } from './Shop';
import {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import Item from './Item';
import { useRef } from "react";
import E_Tron from '../assets/result2.png';
import $ from 'jquery'; 
import SolarPs from '../assets/farm.jpg'
import SolarRoof from '../assets/kid.jpg' 
import SolarHome from '../assets/solarfield.jpg' 
import Green from '../assets/wind.jpg' 



export function SolarPanels() {
    const navigate = useNavigate()
    const { myRef } = useRef();
    const [isActive, setIsActive] = useState(false);
    const [show, setShow] = useState(false);
    const [color, setColor] = useState(false);
    const [color2, setColor2] = useState(false);
    const [isBlur, setIsBlur] = useState(false);
    const [isGone, setIsGone] = useState(true);
    const [isFade, setIsFade] = useState(true);
    const [isFade2, setIsFade2] = useState(true);
    const [isFade3, setIsFade3] = useState(true);

  
    const handleClick = () => {
      // 👇️ toggle
      setIsActive(current => !current);
    }
    const clickBlur = () => {
      // 👇️ toggle
      setIsBlur(current => !current);
    }
    const scrollFade = () => {
      if (window.scrollY > 10) {
        setIsGone(false)
      }else {
          setIsGone(true)
        }
      }
      const scrollFadeIn = () => {
        if (window.scrollY > 650) {
          setIsFade(false)
        }else {
            setIsFade(true)
          }
        }
        const scrollFadeIn2 = () => {
          if (window.scrollY > 1300) {
            setIsFade2(false)
          }else {
              setIsFade2(true)
            }
          }
          const scrollFadeIn3 = () => {
            if (window.scrollY > 1950) {
              setIsFade3(false)
            }else {
                setIsFade3(true)
              }
            }
    function scrollTo(myRef) {
      myRef.current.scrollIntoView({ behavior: "smooth"});
    };
  // this is a function which returning a promise in the requested time
  function wait(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }
  
  // this is the routing function
  async function goToPageShop() {
      // it will navigate to the page 500ms after clicing the div
      setShow(!show)
      await wait(500);
      navigate(`/Shop`);
    }
      // this is the routing function
      async function goToPageApp() {
        // it will navigate to the page 500ms after clicing the div
        setShow(!show)
        await wait(300);
        navigate(`/App`);
      };
      async function order() {
        // it will navigate to the page 500ms after clicing the div
        await wait(300);
        setShow(!show);
        await wait(300);
        navigate(`/OrderSolarNow`);
      };
      useEffect(() => {
        window.addEventListener('scroll', scrollFade);
        window.addEventListener('scroll', scrollFadeIn);
        window.addEventListener('scroll', scrollFadeIn2);
        window.addEventListener('scroll', scrollFadeIn3);


        return () => {
          window.removeEventListener('scroll', scrollFade)
          window.removeEventListener('scroll', scrollFadeIn);
          window.removeEventListener('scroll', scrollFadeIn2);
          window.removeEventListener('scroll', scrollFadeIn3);



        }
      }, [])
return (
<html>
<AnimatePresence>
{show ? null : (
<m.div 
initial={{  opacity: 0 }}
animate={{  opacity: 1 }}
transition={{duration: 0.25, ease: easeInOut}}
exit={{opacity: 0}}
className='fade-in-out'>
<div className='header3' style={{
          filter: isBlur ? 'blur(3px)' : '',
          opacity: isGone ? '' : '0',
        }}>
        <div className='header_logo'>
        <Link onClick={goToPageApp}><img src={E_Tron} alt="E_Tron"/></Link> 
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
       <div className='willThisWork' style={{
          opacity: isGone ? '' : '0',
        }}>
<nav role="navigation">
<div id="menuToggle">
  
    <input type="checkbox" onClick={clickBlur} />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu" >
      <a href="#"><li>Charging Stations</li></a>
      <a href="#"><li>Solar Panels</li></a>
      <a href="#"><li>Shop</li></a>
      <a href="#"><li>Careers</li></a>
      <a href="#"><li>Our Future</li></a>
      <a href="#"><li></li></a>
    </ul>
  </div>
</nav>
</div>
<section className='one' style={{
            backgroundImage: `url(${SolarPs})`,
            filter: isBlur ? 'blur(3px)' : '',
        
        }}>
 <div className='head' style={{
          filter: isBlur ? 'blur(3px)' : '',
        }}>
    <h1>Clean Tomorrow and Go Solar Today</h1>
    <h2>Schedule a Virtual Consultation</h2>
    </div>
    <div className='orderNow' beforecontent='' style={{
          backgroundColor: isActive ? 'rgba(0, 147, 189, 1)' : '',
          border: isActive ? '2px solid rgba(0, 147, 189, 1)' : '',
        }}>
        <div className='orderNowBorder' style={{
          border: isActive ? '3px solid white' : '',
        }}>
        <a className='orderNowButton' onClickCapture={handleClick} onClick={order} style={{
          color: isActive ? 'white' : '',
        }}>
        Order Now
        </a>
        </div>
        </div>
        <div className='scheduleNow' beforecontent='' style={{
          backgroundColor: isActive ? 'rgba(0, 147, 189, 1)' : '',
          border: isActive ? '2px solid rgba(0, 147, 189, 1)' : '',
        }}>
        <div className='scheduleNowBorder' style={{
          border: isActive ? '3px solid white' : '',
        }}>
        <a className='scheduleNowButton' onClickCapture={handleClick} onClick={order} style={{
          color: isActive ? 'white' : '',
        }}>
        Get a Free Qoute
        </a>
        </div>
        </div>
    </section>
   <section className='two'style={{
          filter: isBlur ? 'blur(3px)' : '',
        }}>
    <div className='container'>
    <div className='text-container' style={{
          opacity: isFade ? '' : '1',
        }}>
    <h2>It's More Than</h2>
    <h1>Removing a Bill</h1>
    <p>

    Switching to solar power secures a habitable future. With the global average temperature rising by 1.2°C or 34°F from just 2011 to 2022, future generations will not be able to play outside without severe consequences. Solar Power is now a necessity, not a luxury. Our Government covers 30% of installation and system costs, even they recognize the urgency. At E-Tron, we offer the lowest cost systems and installations through our price match guarantee. Please take control of your electrical independence and our future. Schedule a free virtual consultation with an E-Tron Advisor today.</p>
    </div>
    <div className='photo-container' style={{ backgroundImage: `url(${SolarRoof})`,
     opacity: isFade ? '' : '1',}}>
    </div>
    <div className='savingNow' beforecontent='' style={{
          backgroundColor: isActive ? 'rgba(0, 147, 189, 1)' : '',
          border: isActive ? '2px solid rgba(0, 147, 189, 1)' : '',
          opacity: isFade ? '' : '1',
        }}>
        <div className='savingNowBorder' style={{
          border: isActive ? '3px solid white' : '',
        }}>
        <a className='savingNowButton' onClickCapture={handleClick} onClick={order} style={{
          color: isActive ? 'white' : '',
        }}>
        Find Your Savings Now!
        </a>
        </div>
        </div>
        <div className='consultation' style={{opacity: isFade ? '' : '1',}}>
            <a>Schedule a Virtual Consultation</a>
        </div>
    </div>
    </section>
<section className='three' style={{
          filter: isBlur ? 'blur(3px)' : '',
        }}>
    <div className='container2'>
<div className='photo-container2' style={{ backgroundImage: `url(${SolarHome})`,
 opacity: isFade2 ? '' : '1',}}>

</div>
<div className='text-container2' style={{
          opacity: isFade2 ? '' : '1',
        }}>
<h2>Green Energy</h2>
    <h1>For Less!</h1>
    <p>Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with <br></br>E-Tron's price match guarantee and take control of your monthly electricity bill. Schedule a virtual consultation with a E-Tron Advisor to learn more.</p>
</div>
<div className='savingNow2' beforecontent='' style={{
          backgroundColor: isActive ? 'rgba(0, 147, 189, 1)' : '',
          border: isActive ? '2px solid rgba(0, 147, 189, 1)' : '',
          opacity: isFade2 ? '' : '1',
        }}>
        <div className='savingNowBorder2' style={{
          border: isActive ? '3px solid white' : '',
        }}>
        <a className='savingNowButton2' onClickCapture={handleClick} onClick={order} style={{
          color: isActive ? 'white' : '',
        }}>
        Find Your Savings Now!
        </a>
        </div>
        </div>
        <div className='consultation2' style={{
          opacity: isFade2 ? '' : '1',
        }}>
            <a>Schedule a Virtual Consultation</a>
        </div>
    </div>
  </section>
  <section className='four'  style={{ backgroundImage: `url(${Green})`}}>
  <div className='text_container3'>
      <h1 style={{
          opacity: isFade3 ? '' : '1',
        }}>The Future Is Green</h1>
        <h2 style={{
          opacity: isFade3 ? '' : '1',
        }}>Are You Willing to Make the Change?</h2>
      <div class="icon-scroll" style={{
          opacity: isFade3 ? '' : '1',
        }}></div>
      </div>
  </section>
  <div className='big_section'>
    <p>Hello World</p>
  </div>
  </m.div>)}
    </AnimatePresence>
    </html>
);
}
