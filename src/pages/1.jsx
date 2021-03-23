import React, { useRef } from 'react'
import './1.css'
export const Page1  = () => {
    const sidenav = useRef(null);
    const openNav = () => {
        sidenav.current.style.width = "250px";
    }
    const closeNav = () => {
        sidenav.current.style.width = "0";
    }
    return (
        <>
            <div ref={sidenav} className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
            <span style={{fontSize:"45px", cursor: "pointer", paddingLeft: "15px"}} onClick={openNav}>&#9776;</span>
        </>
    );
}