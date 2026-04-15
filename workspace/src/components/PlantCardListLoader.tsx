import PlantCardList from "./PlantCardList.tsx";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Plant } from "./types.ts";

export default function PlantCardListLoader() {
  const result = useSuspenseQuery({
    queryKey: ["plants"],
    async queryFn() {
      const response = await fetch("http://localhost:7200/api/plants?slow=200");
      const data = await response.json();
      // const plants = data as Plant[];  // <-- Type cast, nur zur Buildzeit
      const plants = Plant.array().parse(data); // <-- Validierung zur Laufzeit
      return plants;
    }
  });

  const plants = result.data;

  return <PlantCardList plants={plants} />
}