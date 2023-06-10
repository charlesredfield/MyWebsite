import { findAllByTitle } from '@testing-library/react'
import React from 'react'
import {Footer} from './footer.js'
import { useEffect, useRef } from "react";
import Button from './Button'
import './Item.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StylesContext } from '@material-ui/styles';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Item({ theFooter, showArrow, title, desc, descLink, backgroundImg, leftBtnText, leftBtnLink, rightBtnText, rightBtnLink, twoButtons, scrollTo, goToSectionRef, }) {
    const headlineRef = useRef();
    useEffect(() => {
        gsap.fromTo(
            headlineRef.current,
            {
                autoAlpha: 0,
                opacity: 0,
                y: -30
    },
    {
        autoAlpha: 1,
        opacity: 100,
        y: 0,
        duration: .5,
        scrollTrigger: {
            scroller: ".app_itemContainer",
            trigger: headlineRef.current,
            start: "y 30%, opacity 0%",
            end: "y 0%, opacity 100%",
            toggleActions: "play none play reset",
        },
    },
        );
    },
 []);
    return (
        <div className='item' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div ref={headlineRef} className="item_container">
                <div ref={headlineRef} className="item_text">
                <div ref={headlineRef} className="item_textTitle">

                    <p>{title}</p>
                    </div>

                    <div className="item_textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item_lowerThird">
                    <div ref={headlineRef} className="item_buttons">
                        <Button imp='primary' text={leftBtnText} link={leftBtnLink} />
                        {twoButtons && (
                            <Button imp='secondary' text={rightBtnText} link={rightBtnLink} /> 
                        )}
                    </div>
                    {showArrow && (
                        <div className="item_expand">
                            </div>                    
                    )}
                    {theFooter && (
                        <Footer className='footer' />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Item