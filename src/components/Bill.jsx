export function Bill({ setBill, calculate, BILL }) {
  
  const handleChange = (e) => {
    const bill = parseFloat(e.target.value)
    setBill(bill)
    calculate()
  }
  
    return (
    <div>
        <label htmlFor="bill-input">Bill</label>
        <input
          type="number"
          id="bill-input"
          value={BILL}
          onChange={ handleChange }
        />
    </div>
    )
}