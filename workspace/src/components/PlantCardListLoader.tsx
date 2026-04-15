import PlantCardList from "./PlantCardList.tsx";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Plant } from "./types.ts";
import { plantListQuery } from "./plant-queries.ts";

export default function PlantCardListLoader() {
  const result = useSuspenseQuery(plantListQuery());

  const plants = result.data;

  return <PlantCardList plants={plants} />
}