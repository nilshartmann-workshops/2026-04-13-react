import { useState } from "react";

import { Plant } from "../types.ts";
import PlantForm from "./PlantForm.tsx";

const allPlants: Plant[] = [
  {
    id: "1",
    name: "Aloe Vera",
    location: "Schlafzimmer",
    wateringInterval: 12,
    lastWatered: "2025-06-16",
  },
  {
    id: "2",
    name: "Orchidee",
    location: "Wohnzimmer",
    wateringInterval: 20,
  },
];

export default function App() {
  const [interval, setInterval] = useState<number>();
  return (
    <div className={"AppContainer"}>
      <PlantForm />
      {/* form wird später durch "echte" Form ersetzt, hier nur wegen Styling */}
      {/*<form>*/}
      {/*  <IntervalSelector interval={interval} onIntervalChange={setInterval} />*/}
      {/*</form>*/}
      {/*<PlantCardList plants={allPlants} />*/}
      {/*<PlantCard*/}
      {/*  name={"Aloe Vera"}*/}
      {/*  location={"Schlafzimmer"}*/}
      {/*  wateringInterval={12}*/}
      {/*  lastWatered={"2025-06-16"}*/}
      {/*/>*/}

      {/*<PlantCard*/}
      {/*  name={"Orchidee"}*/}
      {/*  location={"Wohnzimmer"}*/}
      {/*  wateringInterval={20}*/}
      {/*/>*/}
    </div>
  );
}
