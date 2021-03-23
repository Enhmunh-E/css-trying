import React, { useEffect, useState } from 'react'
import './4.css'
export const Page4 = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <section className="Parallax">
                <div 
                    className="Parallax__background" 
                    style={{ transform: `translateY(${offsetY * 0.5}px)` }}
                />
                <div 
                    className="Parallax__background-triangles" 
                    style={{ transform: `translateY(${offsetY * 0.8}px)` }}
                />
            </section>
        </>
    );
}