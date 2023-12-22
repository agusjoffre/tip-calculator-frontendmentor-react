export function PeopleEnum({ setPeople, calculate, people }) {

    const handleInput = (e) => {
        const peopleNumber = parseFloat(e.target.value)
        setPeople(peopleNumber)
        calculate()
    }

    return (
        <div>
            <p className="label">Number of People</p>
            <input type="number"
                id="people-input"
                className="input"
                value={ people }
                onChange={ handleInput }
            />
        </div>
    )
}