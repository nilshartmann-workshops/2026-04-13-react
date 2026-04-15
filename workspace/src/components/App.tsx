import PlantCard from "./PlantCard.tsx";
import PlantCardList from "./PlantCardList.tsx";
import { Plant } from "./types.ts";
import IntervalSelector from "./IntervalSelector.tsx";
import { use, useEffect, useState } from "react";
import PlantForm from "./PlantForm.tsx";

// const allPlants: Plant[] = [
//   {
//     id: "1",
//     name: "Aloe Vera",
//     location: "Schlafzimmer",
//     wateringInterval: 12,
//     lastWatered: "2026-04-06",
//   },
//   {
//     id: "2",
//     name: "Orchidee",
//     location: "Wohnzimmer",
//     wateringInterval: 20,
//   },
// ];


// Render Phase -> virtual DOM -> Seiteneffekte verboten!!!!!!!!!!!!
// Commit Phase: virtual DOM -> "echter" DOM  <--- Seiteneffekte erlaubt!
export default function App() {
  const [ interval, setInterval ] = useState<number>(1);
  const [plants, setPlants] = useState<Plant[]>([]);

  // async function loadPlants() { ... }
  const loadPlants = async () => {
    // fetch API (Browser API)
    // axios (Bibliothek)
    // ky (Bibliothek)
    const response = await fetch("http://localhost:7200/api/plants");
    const data = await response.json();
    // const plants = data as Plant[];  // <-- Type cast, nur zur Buildzeit
    const plants = Plant.array().parse(data); // <-- Validierung zur Laufzeit
    console.log("PLANTS", plants);
    setPlants(plants);
  }

  // - nach JEDEM commit ausführen
  // - nach dem ERSTEN commit ausführen: 2. Paramter leeres Array []
  // - nur ausführen, wenn sich etwas geändert (Dependency Array)
  // - Wahrscheinlich braucht ihr keinen Effekt: https://react.dev/learn/you-might-not-need-an-effect
  useEffect( () => {
   // Effect Callback funktion
    console.log(interval);
    loadPlants();
  }, [ interval ])

  // loadPlants();

  // Virtual DOM -> Beschreibung der Oberfläche -> keine Seiteneffekte!

  return (
    <div className={"AppContainer"}>

      {/*<PlantForm />*/}

      {/*<button className={"primary"} onClick={() => loadPlants()}>Lade Pflanzen</button>*/}
      <PlantCardList plants={plants} />

      <PlantForm />

      {/*<PlantCard*/}
      {/*  name={"Tulpe"}*/}
      {/*  location={"Küche"}*/}
      {/*  wateringInterval={7}*/}
      {/*  lastWatered="2026-04-13"*/}
      {/*/>*/}
    </div>
  );
}
