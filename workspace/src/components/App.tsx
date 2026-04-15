import PlantCard from "./PlantCard.tsx";
import PlantCardList from "./PlantCardList.tsx";
import { Plant } from "./types.ts";
import IntervalSelector from "./IntervalSelector.tsx";
import { Suspense, use, useEffect, useState } from "react";
import PlantForm from "./PlantForm.tsx";
import {
  useQueryErrorResetBoundary,
  useSuspenseQuery,
} from "@tanstack/react-query";
import PlantCardListLoader from "./PlantCardListLoader.tsx";
import { ErrorBoundary } from "react-error-boundary";
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

  const { reset } = useQueryErrorResetBoundary()


  return (
    <div className={"AppContainer"}>
      <PlantForm />

      <ErrorBoundary
        onReset={reset}
        fallbackRender={p => <div>
          Fehler beim Laden der Daten: {p.error.toString()}
          <button className={"secondary"} onClick={() => p.resetErrorBoundary()}>Nochmal probieren!</button>
        </div>
      }>
        <Suspense fallback={<div className={"CardListFallback"}>Pflanzen werden geladen</div>}>
          <PlantCardListLoader />
        </Suspense>
      </ErrorBoundary>

    </div>
  );
}
