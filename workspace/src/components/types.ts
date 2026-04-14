import { z } from "zod/v4";
import dayjs, { Dayjs } from "dayjs";

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
  name: z.string().nonempty("Bitte Pflanzennamen eingeben"),
  location: z.string().nonempty("Bitte Standort eingeben"),
  lastWatered: z.iso.date().optional(),

  wateringInterval: z.number().min(1),

  // dayjs-Objekte im Schema:
  //  https://github.com/colinhacks/zod/discussions/1259#discussioncomment-7866342
  // myDate: z.custom<Dayjs>(val => val instanceof dayjs)
});
export type Plant = z.infer<typeof Plant>;

export const NewPlant = Plant.omit(
  { id: true }
)

export type NewPlant = z.infer<typeof NewPlant>;

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
//   lastWatered: "2026-04-14",
//   myDate: "fsafsdfsdf"
// })
//
// printPlant(p);


