import { Label } from "keep-react";

export function TipSelector() {
    return (
        <>
            <Label value="Select Tip %" />
        <div>
            <button className="btn btn-tip-selector">5%</button>
            <button className="btn btn-tip-selector">10%</button>
            <button className="btn btn-tip-selector">15%</button>
            <button className="btn btn-tip-selector">25%</button>
            <button className="btn btn-tip-selector">50%</button>
            <button className="btn btn-tip-selector">Custom</button>
        </div>
    </>
    )
}