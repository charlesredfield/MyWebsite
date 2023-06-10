import React from 'react';
import { Outlet, Link } from "react-router-dom";
const NavLinks = () => {
    return (
        <>
        <div className='navLinks'>
        <Link href="#" className='link' to={`/ChargingStations`}>+Stations</Link>  
        <Link href="#" className='link' to={`/SolarPanels`}>Solar Panels</Link>   
        <Link href="#" className='link' to={`/OurFuture`}>Our Future</Link>     
        <Link href="#" className='link' to={`/Shop`}>Shop</Link>  
        <Link href="#" className='link' to={`/Account`}>Account</Link>    
        </div>
        </>
    );
}

export default NavLinks;