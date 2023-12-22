export function PeopleEnum({ setPeople, calculate, people }) {

    const handleInput = (e) => {
        const peopleInput = e.target.value
        const peopleNumber = parseFloat(peopleInput)
        setPeople(peopleNumber)
        calculate()
    }

    return (
        <div>
            <label htmlFor="people-input">Number of People</label>
            <input type="number"
                id="people-input"
                value={ people }
                onChange={ handleInput }
            />
        </div>
    )
}