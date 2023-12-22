import "../syles/bill.css"

export function Bill({ setBill, calculate, BILL }) {
  
  const handleChange = (e) => {
    const bill = parseFloat(e.target.value)
    setBill(bill)
    calculate()
  }
  
    return (
    <div className="bill-container">
        <p className="label">Bill</p>
        <input
          type="number"
          id="bill-input"
          className="input"
          value={BILL}
          onChange={ handleChange }
        />
    </div>
    )
}