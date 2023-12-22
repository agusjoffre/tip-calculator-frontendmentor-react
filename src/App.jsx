import { Bill } from "./components/Bill"
import { TipSelector } from "./components/TipSelector"
import { PeopleEnum } from "./components/PeopleEnum"
import { TipAmount } from "./components/TipAmount"
import {Total} from "./components/Total"
import { Reset } from "./components/Reset"
import {tipCalculator, totalPerPersonCalculator} from "./calculator"
import { useState } from "react";
import "./syles/app.css"


function App() {
  const [bill, setBill] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [people, setPeople] = useState(0)


  const [tipPerPerson, setTipPerPerson] = useState(0)
  const [totalBill, setTotalBill] = useState(0)

  const handleTipCalc = () => {
  const tipResult = tipCalculator(bill, tipPercentage, people)
  setTipPerPerson(tipResult)
  const totalResult = totalPerPersonCalculator(bill, tipResult, people)
  setTotalBill(totalResult)
}

  const handleReset = () => {
    setBill(0)
    setTipPercentage(0)
    setPeople(0)
    setTipPerPerson(0)
    setTotalBill(0)
  }


  return (
    <>
      <div className="justify-center py-50">
      <h1>SPLI<br></br>TTER</h1>
      <div className="app">
        <div className="left">
          <Bill setBill={setBill} calculate={handleTipCalc} BILL={bill}/>
          <TipSelector setTipPercentage={setTipPercentage} calculate={handleTipCalc}/>
          <PeopleEnum setPeople={setPeople} calculate={handleTipCalc} people={people}/>
        </div>
        <div className="right">
          <div className="container-calculation">
            <TipAmount tipPerPerson={tipPerPerson}/>
            <Total totalBill={totalBill}/>
          </div>
          <Reset onReset={handleReset}/>
        </div>
        </div>
        </div>
    </>
  )
}

export default App
