// "Globale" Styles, aber für jedes Modul (eher nicht verwenden!)
// import "./IntervalSelector.css"

// "CSS Modules" (schon)
//  alternativ mit SCSS/LESS
import styles from "./IntervalSelector.module.css"
import { useDeferredValue, useState } from "react";
import { UseFormRegister } from "react-hook-form";
//   Verwendung: <div className={styles.IntervalSelector}>...</div>

// CSS-in-JS
//  - Styled Components
//  - Material UI (MUI)

type IntervalSelectorProps = {
  interval?: number;
  onIntervalChange(newInterval: number): void
}

// void onIntervalChange(int newInterval)

// Eigene Komponenten mit React Hook Form verbinden: https://react-hook-form.com/get-started#Integratinganexistingform
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

  const myInterval = props.interval === undefined ? "" : props.interval;

console.log("myInterval", myInterval);

  return <div className={styles.IntervalSelector + " " + styles.Small}>
    <label>Interval</label>
    <input type={"number"}
           value={myInterval}
           {...props}
           onChange={ event => {
             console.log("Value", event.target.value);
             const parsedInterval = parseInt(event.target.value);
             console.log("parsedInterval", parsedInterval)
             props.onIntervalChange(parsedInterval)
           }} />
    <button className={"secondary"} type={"button"} onClick={() => props.onIntervalChange(1)}>Täglich</button>
    <button className={"secondary"} type={"button"} onClick={handleWeeklyClick}>7-tägig</button>
    <button className={"secondary"} type={"button"} onClick={() => props.onIntervalChange(14)}>14-tägig</button>
    <div>Alle {props.interval} Tage gießen</div>
  </div>

}