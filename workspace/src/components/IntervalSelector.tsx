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

type IntervalSelectorProps = {
  interval: number;
  onIntervalChange(newInterval: number): void
}

// void onIntervalChange(int newInterval)

export default function IntervalSelector(props: IntervalSelectorProps) {

  // Kontrollierte Komponenten (controlled componente)
  // Unkontrollierte Komponenten (uncontrolled componente)
  // "Zustand" (State)   (Model)
  // const state = useState(1);
  // const interval = state[0];
  // const setInterval = state[1];


  // const deferredValue = useDeferredValue(interval, 200);
  // useDebounce https://usehooks.com/usedebounce

  const handleWeeklyClick = () => {
    props.onIntervalChange(7)
  }

  return <div className={styles.IntervalSelector + " " + styles.Small}>
    <label>Interval</label>
    <input type={"number"}
           value={props.interval}
           onChange={ event => props.onIntervalChange(parseInt(event.target.value)) } />
    <button className={"secondary"} type={"button"} onClick={() => props.onIntervalChange(1)}>Täglich</button>
    <button className={"secondary"} type={"button"} onClick={handleWeeklyClick}>7-tägig</button>
    <button className={"secondary"} type={"button"} onClick={() => props.onIntervalChange(14)}>14-tägig</button>
    <div>Alle {props.interval} Tage gießen</div>
  </div>

}