export function PeopleEnum({ setPeople, calculate, people }) {

    const handleInput = (e) => {
        const peopleNumber = parseFloat(e.target.value)
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