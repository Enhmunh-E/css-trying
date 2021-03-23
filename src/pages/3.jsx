import React from 'react'
import './3.css'
import { Accordion } from '../components'
export const Page3 = () => {
    return (
        <>
            <Accordion 
                title="What is your true policy?" 
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ab ratione, numquam veritatis nesciunt quidem praesentium non maxime corrupti, distinctio fuga iusto ea magnam veniam suscipit laborum, tempora rem consequatur."
            />
            <Accordion 
                title="What is your true policy?" 
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ab ratione, numquam veritatis nesciunt quidem praesentium non maxime corrupti, distinctio fuga iusto ea magnam veniam suscipit laborum, tempora rem consequatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ab ratione, numquam veritatis nesciunt quidem praesentium non maxime corrupti, distinctio fuga iusto ea magnam veniam suscipit laborum, tempora rem consequatur."
            />
            <Accordion 
                title="What is your true policy?" 
                content="
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ab ratione, numquam veritatis nesciunt quidem praesentium non maxime corrupti, distinctio fuga iusto ea magnam veniam suscipit laborum, tempora rem consequatur."
            />
        </>
    );
} 