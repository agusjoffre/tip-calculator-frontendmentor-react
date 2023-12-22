import "../syles/tip-selector.css"

import { useState } from "react";

export function TipSelector({ setTipPercentage, calculate }) {

    const [showCustomInput, setShowCustomInput] = useState(false)
    const [customPercentage, setCustomPercentage] = useState(0)

    const handleCustomPercentageInput = (e) => {
        const percentage = e.target.value
        setCustomPercentage(percentage)
    }

    const handleCustomClick = () => {
        setShowCustomInput(true)
    }

    const handlePercentage = (percentage) => {
        setTipPercentage(percentage);
        calculate();
    };




    return (
        <>
            <p className="label">Select Tip %</p>
        <div className="tip-selector-container">
            <button className="btn btn-tip-selector" onClick={()=>handlePercentage(5)}>5%</button>
            <button className="btn btn-tip-selector"  onClick={()=>handlePercentage(10)}>10%</button>
            <button className="btn btn-tip-selector"  onClick={()=>handlePercentage(15)}>15%</button>
            <button className="btn btn-tip-selector" onClick={()=>handlePercentage(25)}>25%</button>
                <button className="btn btn-tip-selector" onClick={ () => handlePercentage(50) }>50%</button>
                { showCustomInput ? (
                    <input
                        type="number"
                        id="custom-input"
                        value={ customPercentage }
                        onChange={ (e) => {
                            handleCustomPercentageInput(e);
                            handlePercentage(customPercentage)
                        } }
                    />
                ) : (
                    <button className="btn btn-tip-selector" onClick={handleCustomClick}>Custom</button>    
                )}
        </div>
    </>
    )
}