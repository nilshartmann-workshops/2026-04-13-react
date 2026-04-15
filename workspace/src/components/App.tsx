import PlantCard from "./PlantCard.tsx";
import PlantCardList from "./PlantCardList.tsx";
import { Plant } from "./types.ts";
import IntervalSelector from "./IntervalSelector.tsx";
import { use, useEffect, useState } from "react";
import PlantForm from "./PlantForm.tsx";
import { useSuspenseQuery } from "@tanstack/react-query";
import PlantCardListLoader from "./PlantCardListLoader.tsx";

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


  return (
    <div className={"AppContainer"}>
      {/*<PlantForm />*/}
      <PlantCardListLoader />

    </div>
  );
}
