export function Total() {
        return (
        <div className="total-container">
            <div className="left-total">
                <p id="total-label">Total</p>
                <p id="total-per-person">/ person</p>
            </div>
            <div className="right-total">
                <h1 className="big-number">$</h1>
            </div>
        </div>
    )
}