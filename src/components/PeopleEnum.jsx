import { Label, TextInput } from "keep-react";

export function PeopleEnum() {
    return (
        <div>
            <Label htmlFor="people-input" value="Number of People" />
      <TextInput
        id="people-input"
                color="gray"
      />
        </div>
    )
}