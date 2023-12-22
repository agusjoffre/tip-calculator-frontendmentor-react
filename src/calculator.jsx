export function tipCalculator(bill, tipPercentage, people) {
    const totalRaw = bill * (tipPercentage / 100);
    const total = totalRaw.toFixed(2);
    const perPerson = total / people;
    return perPerson.toFixed(2)
}

export function totalPerPersonCalculator(bill, tipPerPerson, people) {
    const total = tipPerPerson * people + bill
    const perPerson = total / people
    return perPerson.toFixed(2)
}



