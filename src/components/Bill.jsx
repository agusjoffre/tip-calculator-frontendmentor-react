import { Label,TextInput } from "keep-react";

export function Bill() {
    return (
    <div>
      <Label htmlFor="bill-input" value="Bill" />
      <TextInput
        id="bill-input"
        color="gray"
      />
    </div>
    )
}