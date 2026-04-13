import PlantCard from "./PlantCard.tsx";
import PlantCardList from "./PlantCardList.tsx";
import { Plant } from "./types.ts";
import IntervalSelector from "./IntervalSelector.tsx";

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
  return (
    <div className={"AppContainer"}>

      <IntervalSelector />


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
