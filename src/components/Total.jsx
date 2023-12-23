import "../syles/total.css"

export function Total({ totalBill }) {
        return (
        <div className="total-container">
            <div className="left-total">
                <p id="total-label">Total</p>
                <p id="total-per-person">/ person</p>
            </div>
                <div className="right-total">
                    { totalBill > 0 ?  (<h1 className="big-number">${ totalBill }</h1>) :
                    (<h1 className="big-number">$0.00</h1>)}
                    
               
            </div>
        </div>
    )
}