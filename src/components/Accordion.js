import React, { useState, useRef } from 'react'
import { Chevron } from './Chevron'
import './Accordion.css'
export const Accordion = (props) => {
    const { title, content } = props;
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion_icon")

    const contents = useRef(null);

    const toggleAccordion = () => {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${contents.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion_icon" : "accordion_icon rotate"
        )
        console.log(contents.current.scrollHeight);
    }
    return (
        <div className="accordion_section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion_title">{title}</p>
                <Chevron width={10} fill={"#777"} className={`${setRotate}`}/>
            </button>
            <div 
                ref={contents} 
                style={{ maxHeight: `${setHeight}` }} 
                className="accordion_content">
                <div 
                    className="accordion_text"
                    dangerouslySetInnerHTML={{ __html: content}}
                />
            </div>
        </div>
    );
}