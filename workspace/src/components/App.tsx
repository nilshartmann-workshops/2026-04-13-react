import PlantCard from "./PlantCard.tsx";
import PlantCardList from "./PlantCardList.tsx";
import { Plant } from "./types.ts";
import IntervalSelector from "./IntervalSelector.tsx";
import { use, useState } from "react";
import PlantForm from "./PlantForm.tsx";

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

  // use-Funktionen: "Hook-Funktion"
  const [ interval, setInterval ] = useState<number>(1);
  const [isIntervalSelectorVisible, setIsIntervalSelectorVisible] = useState(true)

  const errorMsg = interval === 0 ? "Bitte keine 0 eingeben": null;

//   window.document.title = "React Workshop";


  // Virtual DOM -> Beschreibung der Oberfläche
  return (
    <div className={"AppContainer"}>

      <PlantForm />

      {/*<button onClick={*/}
      {/*  () => setIsIntervalSelectorVisible(!isIntervalSelectorVisible)}*/}
      {/*>Ein-/ausschalten</button>*/}

      {/*{isIntervalSelectorVisible ? <IntervalSelector*/}
      {/*  interval={interval}*/}
      {/*  onIntervalChange={newInterval => {*/}
      {/*    setInterval(newInterval);*/}
      {/*  }}*/}

      {/*/> : null}*/}
      {/*{errorMsg}*/}

      {/*<div>Interval in App-Komponente: {interval}</div>*/}
      {/*<div>*/}
      {/*  <button type={"button"} onClick={() => setInterval(400)}>Auf 400 setzen</button>*/}
      {/*</div>*/}


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
