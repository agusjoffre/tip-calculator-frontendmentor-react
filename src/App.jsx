import { Bill } from "./components/Bill"
import { TipSelector } from "./components/TipSelector"
import { PeopleEnum } from "./components/PeopleEnum"
import { TipAmount } from "./components/TipAmount"
import {Total} from "./components/Total"
import { Reset } from "./components/Reset"


function App() {
  return (
    <>
      <h1>SPLI<br></br>TTER</h1>
      <div className="app">
        <div className="left">
          <Bill />
          <TipSelector />
          <PeopleEnum/>
        </div>
        <div className="right">
          <div className="container-calculation">
            <TipAmount />
            <Total/>
          </div>
          <Reset/>
        </div>
      </div>
    </>
  )
}

export default App
