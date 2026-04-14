import { z } from "zod/v4";

// export type Plant = {
//   id: string;
//   name: string;
//   location: string;
//   wateringInterval: number;
//   lastWatered?: string;
// };

// TypeScript = JavaScript + Typsystem
//  TypeScript striping

export const Plant = z.object({
  id: z.string(),
  name: z.string().nonempty("Pflanzenname fehlt!"),
  location: z.string().nonempty(),
  wateringInterval: z.number().min(1),
  lastWatered: z.iso.date().optional()
})

export type Plant = z.infer<typeof Plant>;
//
// function printPlant(plant: Plant) {
//   console.log(plant.name)
// }
//
// const p = Plant.parse({
//   id: "1",
//   name: "Tulpe",
//   location: "Küche",
//   wateringInterval: 7,
//   lastWatered: "2026-04-14"
// })
//
// printPlant(p);


