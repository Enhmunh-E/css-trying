import React, { useRef } from 'react'
import './2.css'
import circle from './circles.svg'
export const Page2 = () => {
    const hamburger = useRef(null);
    const navLinks = useRef(null);
    const link1 = useRef(null);
    const link2 = useRef(null);
    const link3 = useRef(null);
    const hamburgerClick = () => {
        navLinks.current.classList.toggle("open");
        link1.current.classList.toggle("fade");
        link2.current.classList.toggle("fade");
        link3.current.classList.toggle("fade");
    }
    return (
        <>
            <nav>
                <div className="hamburger" ref={hamburger} onClick={hamburgerClick}>
                    <div className="line"/>
                    <div className="line"/>
                    <div className="line"/>
                </div>
                <ul className="nav-links" ref={navLinks}>
                    <li ref={link1}><a href="#">About</a></li>
                    <li ref={link2}><a href="#">Contact</a></li>
                    <li ref={link3}><a href="#">Projects</a></li>
                </ul>
            </nav>
            <section className="landing">
                <img src={circle} alt="dots"/>
                <h1>Dots</h1>
            </section>
        </>
    );
}