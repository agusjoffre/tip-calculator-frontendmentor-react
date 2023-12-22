export function TipAmount({tipPerPerson}) {
    return (
        <div className="amount-container">
            <div className="left-amount">
                <p id="tip-amount">Tip Amount</p>
                <p id="per-person">/ person</p>
            </div>
            <div className="right-amount">
                <h1 className="big-number">${tipPerPerson}</h1>
            </div>
        </div>
    )
}