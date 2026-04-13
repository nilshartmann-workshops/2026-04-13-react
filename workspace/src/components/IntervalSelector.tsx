// "Globale" Styles, aber für jedes Modul (eher nicht verwenden!)
// import "./IntervalSelector.css"

// "CSS Modules" (schon)
//  alternativ mit SCSS/LESS
import styles from "./IntervalSelector.module.css"
//   Verwendung: <div className={styles.IntervalSelector}>...</div>

// CSS-in-JS
//  - Styled Components
//  - Material UI (MUI)

export default function IntervalSelector() {

  return <div className={styles.IntervalSelector + " " + styles.Small}>
    <label>Interval</label>
    <input type={"number"} />
    <button className={"secondary"} type={"button"}>Täglich</button>
    <button className={"secondary"} type={"button"}>7-tägig</button>
    <button className={"secondary"} type={"button"}>14-tägig</button>
  </div>

}