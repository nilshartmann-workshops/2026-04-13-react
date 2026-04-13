// "Globale" Styles, aber für jedes Modul (eher nicht verwenden!)
// import "./IntervalSelector.css"

// "CSS Modules" (schon)
//  alternativ mit SCSS/LESS
import styles from "./IntervalSelector.module.css"
import { useDeferredValue, useState } from "react";
//   Verwendung: <div className={styles.IntervalSelector}>...</div>

// CSS-in-JS
//  - Styled Components
//  - Material UI (MUI)

export default function IntervalSelector() {

  // "Zustand" (State)   (Model)
  // const state = useState(1);
  // const interval = state[0];
  // const setInterval = state[1];
  const [ interval, setInterval ] = useState(1);

  // const deferredValue = useDeferredValue(interval, 200);
  // useDebounce https://usehooks.com/usedebounce

  const handleWeeklyClick = () => {
    setInterval(7)
  }

  return <div className={styles.IntervalSelector + " " + styles.Small}>
    <label>Interval</label>
    <input type={"number"} value={interval}
           onChange={ event => setInterval(parseInt(event.target.value)) } />
    <button className={"secondary"} type={"button"} onClick={() => setInterval(1)}>Täglich</button>
    <button className={"secondary"} type={"button"} onClick={handleWeeklyClick}>7-tägig</button>
    <button className={"secondary"} type={"button"} onClick={() => setInterval(14)}>14-tägig</button>
    <div>Alle {interval} Tage gießen</div>
  </div>

}