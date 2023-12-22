import { Label } from "keep-react";

export function TipSelector({setTipPercentage, calculate}) {

    const handlePercentage = (id) => {
        let number = Number(id)

        if (id === "5") {
            setTipPercentage(number)
            calculate()
            return 
        } else if (id === "10") {
            setTipPercentage(number)
            calculate()
            return 
        } else if (id === "15") {
            setTipPercentage(number)
            calculate()
            return
        } else if (id === "25") {
            setTipPercentage(number)
            calculate()
            return
        } else if (id === "50") {
            setTipPercentage(number)
            calculate()
            return
        } else if (id === "custom") {
            return
        } else {
            throw new Error()
        }
    }


    return (
        <>
            <Label value="Select Tip %" />
        <div>
            <button className="btn btn-tip-selector" id="5" onClick={handlePercentage}>5%</button>
            <button className="btn btn-tip-selector" id="10" onClick={handlePercentage}>10%</button>
            <button className="btn btn-tip-selector" id="15" onClick={handlePercentage}>15%</button>
            <button className="btn btn-tip-selector" id="25" onClick={handlePercentage}>25%</button>
            <button className="btn btn-tip-selector" id="50" onClick={handlePercentage}>50%</button>
            <button className="btn btn-tip-selector" id="custom">Custom</button>
        </div>
    </>
    )
}