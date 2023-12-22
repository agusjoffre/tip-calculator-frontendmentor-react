import { Label,TextInput } from "keep-react";

export function Bill({ setBill, calculate }) {
  
  const handleChange = (e) => {
    const bill = parseFloat(e.target.value)
    setBill(bill)
    calculate()
  }
  
    return (
    <div>
      <Label htmlFor="bill-input" value="Bill" />
      <TextInput
        id="bill-input"
          color="gray"
          onChange={handleChange}
      />
    </div>
    )
}