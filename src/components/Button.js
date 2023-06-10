import React from 'react'
import './Button.css'
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
const Button = ({ imp, text, link, }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const butt = link;

  function wait(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });}

    async function goToPageSolarPanels() {
      setShow(!show)
      await wait(500);
      navigate(butt);
    }

  return (
    <div className={`button ${imp === 'secondary' ? 'button_white' : ""}`}>
        <Link onClick={goToPageSolarPanels}> 
        {text}
        </Link>
    </div>
  )
}

export default Button