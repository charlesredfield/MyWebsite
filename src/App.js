import './App.css';
import Accessories from './assets/Express.png'
import SolarPs from './assets/modernhouse.jpg'
import SolarRoof from './assets/farm.jpg'
import Item from './components/Item'
import { useRef } from "react";
import {Header} from './components/Header.js';
import {Menu} from './components/Menu.js'
import $ from 'jquery'; 
import {useState} from 'react';
import { Outlet, Link, BrowserRouter } from "react-router-dom";
import E_Tron from './assets/result.png';
import {AnimatePresence, easeInOut, motion as m} from "framer-motion"
import { useNavigate } from "react-router-dom";
import { Shop } from './components/Shop'
import SolarHome from './assets/SunnySolar.jpg' 


export function App() {
const navigate = useNavigate()
  const { myRef } = useRef();
  const [isActive, setIsActive] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);
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
  async function goToPageSolarPanels() {
    // it will navigate to the page 500ms after clicing the div
    setShow(!show)
    await wait(500);
    navigate(`/SolarPanels`);
  }
return (
  <>
  <div className="App">

  <AnimatePresence>
  {show ? (
  <m.div 
  initial={{ y: "-250%" }}
animate={{ y: "0%" }}
transition={{ duration: 0.5, type: 'spring', bounce: 0.0,}}
exit={{ y: "-250%"}}
className='Menu'>
<nav role="navigation">
<div id="menuToggle">
  
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
</m.div>  ) : null}
  </AnimatePresence>
<AnimatePresence>
{show ? (
<m.div 
initial={{ y: "-100%", opacity: 0 }}
animate={{ y: "0%", opacity: 1 }}
transition={{duration: 0.5, type: 'spring', bounce: 0.0,}}
exit={{y: "-100%", opacity: 0, type: 'spring', bounce: 0.0 }}
className='header' style={{
          filter: isActive ? 'blur(3px)' : '',
        }}>

        <div className='header_logo'>
        <Link to={`/App`}><img src={E_Tron} alt="E_Tron"/></Link> 
        </div>
        <div className='header_center'>
          <Link onClick={() => setShow(!show)} href="#" className='link' to={`/ChargingStations`}>Charging Stations</Link>  
          <Link onClick={goToPageSolarPanels} href="#" className='link'>Solar Panels</Link>   
          <Link onClick={() => setShow(!show)} href="#" className='link' to={`/OurFuture`}>Our Future</Link>     
          <Link onClick={goToPageShop} className='link'>Shop</Link>  
          <Link onClick={() => setShow(!show)} href="#" className='link' to={`/Account`}>Account</Link>   
          <Link onClick={() => setShow(!show)} href="#" className='link' to={`/Careers`}>Careers</Link> 
          <Link onClick={() => setShow(!show)} href="#" className='link' to={`/Contact Us`}>Contact Us</Link> 
       <div class="animation start-home"></div>
        </div>
    </m.div>) : null}
    </AnimatePresence>
    <AnimatePresence>
  {show ? (
  <m.div 
  initial={{ opacity: 0}}
animate={{ opacity: 1 }}
transition={{ duration: 0.25, delay: 0.25,ease: easeInOut}}
exit={{ opacity: 0}}
className="app_itemContainer" style={{
          filter: isActive ? 'blur(3px)' : '',
        }}>
      <div className="section1" ref={myRef}>
      
        <Item
          title='Electrify The World'
          desc='With The Lowest Cost Insallations in America'
          backgroundImg={SolarHome}
          leftBtnText='Order Now'
          leftBtnLink='/OrderSolarNow'
          rightBtnText='Learn Now'
          rightBtnLink='/SolarPanels'
          twoButtons={true}
          showArrow={true}
          theFooter={false}
          scrollTo={scrollTo}
          goToSectionRef={myRef} />
      </div>
      <div className="section2" ref={myRef}>
        <Item
          title='Solar Panels'
          desc='Money-back Guarantee'
          backgroundImg={SolarRoof}
          leftBtnText='Order Now'
          leftBtnLink='/OrderSolarNow'
          rightBtnText='Learn More'
          rightBtnLink='/SolarPanels'
          twoButtons={true}
          showArrow={true}
          theFooter={false}
          scrollTo={scrollTo}
          goToSectionRef={myRef} />
      </div>
      <div className="section3" ref={myRef}>
        <Item
          title='Station Selection'
          desc='250 Miles Charge Per Hour'
          backgroundImg={Accessories}
          leftBtnText='Order Now'
          leftBtnLink=''
          rightBtnText='Learn More'
          rightBtnLink=''
          twoButtons={true}
          showArrow={false}
          theFooter={true} />
      </div>
    </m.div>) : null}
    </AnimatePresence>
    </div>
  </>

  );}


export default App;
