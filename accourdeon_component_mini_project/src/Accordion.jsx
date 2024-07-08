import { useState, useRef } from "react"
import { RiArrowDownLine } from "react-icons/ri"
import { data } from "./AccordionData"

function AccordionItem({question,answer,isOpen,onClick}) {
    const contentHeight = useRef()
    return (

        <div className="wrapper">
            <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick}>
                <p className="question-content">{question}</p>
                <RiArrowDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
            </button>
            <div ref={contentHeight} className="answer-container" style={isOpen ? {height: contentHeight.current.scrollHeight} : {height: "0px"}}>
                <p className="answer-content">{answer}</p>
            </div>
        </div>
    )
}

function Accordion() {
    const [activeIndex,setActiveIndex] = useState(null)

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex ? null : index))
    };

    return (
       <div className="container">
        {data.map((item,index) => (
            <AccordionItem 
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
            />
        ))}
       </div>
    )
}

export {Accordion}