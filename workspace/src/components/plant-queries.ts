import { queryOptions } from "@tanstack/react-query";
import { Plant } from "./types.ts";

export const plantListQuery = () => {
  return queryOptions({
    queryKey: ["plants"],
    async queryFn() {
      const response = await fetch("http://localhost:7200/api/plants?slow=200");
      const data = await response.json();
      // const plants = data as Plant[];  // <-- Type cast, nur zur Buildzeit
      const plants = Plant.array().parse(data); // <-- Validierung zur Laufzeit
      return plants;
    }
  })
}