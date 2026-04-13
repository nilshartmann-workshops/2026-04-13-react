import PlantCard from "./PlantCard.tsx";
import PlantCardList from "./PlantCardList.tsx";
import { Plant } from "./types.ts";
import IntervalSelector from "./IntervalSelector.tsx";
import { use, useState } from "react";

const allPlants: Plant[] = [
  {
    id: "1",
    name: "Aloe Vera",
    location: "Schlafzimmer",
    wateringInterval: 12,
    lastWatered: "2026-04-06",
  },
  {
    id: "2",
    name: "Orchidee",
    location: "Wohnzimmer",
    wateringInterval: 20,
  },
];


export default function App() {

  const [isIntervalSelectorVisible, setIsIntervalSelectorVisible] = useState(true)
  const [counter, setCounter] = useState(1);

  // Ausdruck:
  const x = isIntervalSelectorVisible ? "Sichtbar" : "Nicht sichtbar";

  // Anweisung:
  let y;
  if (isIntervalSelectorVisible) {
    y = "Sichtbar"
  } else {
    y = "Nicht sichtbar"
  }

  // Ausdrücke Expression  ?-Operator Funktionsaufruf &&-Operator ||-Operator
  // Anweisung Statements   if switch goto


  return (
    <div className={"AppContainer"}>

      <button onClick={
        () => setIsIntervalSelectorVisible(!isIntervalSelectorVisible)}
      >Ein-/ausschalten</button>
      <div>
        <button onClick={() => setCounter(counter+1)}>Count: {counter}</button>
      </div>

      {isIntervalSelectorVisible ? <IntervalSelector /> : null}
      {/*{isIntervalSelectorVisible && <IntervalSelector />}*/}
      {/*{isIntervalSelectorVisible || "Nicht sichtbar"}*/}



      {/*<PlantCardList plants={allPlants} />*/}

      {/*<PlantCard*/}
      {/*  name={"Tulpe"}*/}
      {/*  location={"Küche"}*/}
      {/*  wateringInterval={7}*/}
      {/*  lastWatered="2026-04-13"*/}
      {/*/>*/}
    </div>
  );
}
