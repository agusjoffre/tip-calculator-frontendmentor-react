export function TipSelector({setTipPercentage, calculate}) {

    const handlePercentage = (percentage) => {
          
        if (percentage === "custom") {
            return;
        }

        setTipPercentage(percentage);
        calculate();
    };


    return (
        <>
            <label>Select Tip %</label>
        <div>
            <button className="btn btn-tip-selector" onClick={()=>handlePercentage(5)}>5%</button>
            <button className="btn btn-tip-selector"  onClick={()=>handlePercentage(10)}>10%</button>
            <button className="btn btn-tip-selector"  onClick={()=>handlePercentage(15)}>15%</button>
            <button className="btn btn-tip-selector" onClick={()=>handlePercentage(25)}>25%</button>
            <button className="btn btn-tip-selector"  onClick={()=>handlePercentage(50)}>50%</button>
            <button className="btn btn-tip-selector">Custom</button>
        </div>
    </>
    )
}