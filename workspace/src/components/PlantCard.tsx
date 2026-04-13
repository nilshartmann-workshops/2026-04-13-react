
//
//
//
//
//

/*
{
name: "Tulpe"
location: "Schlafzimmer"
wateringInterval: 7
lastWatered: "2026-04-13"
}
 */


// interface IPlantCardProps {
//   name: string;
//   location: string;
//   wateringInterval: number;
//   lastWatered: string;
// }


import { getDaysUntilWatering } from "./date-utils.ts";

type PlantCardProps = {
  name: string;
  location: string;
  wateringInterval: number;
  lastWatered?: string;
};

/// export default function PlantCard( props : PlantCardProps) {
// Destructuring Operator { ... }
export default function PlantCard( { name, location, lastWatered, wateringInterval }: PlantCardProps) {
  // JSX
  // Properties (XML/HTML Attribute)
  //   class -> className
  //   html-for -> htmlFor

  const wateringInfo = wateringInterval === 1
    ? "Jeden Tag gießen" : `Alle ${wateringInterval} Tage gießen`;

  // Alternativ ohne Destructuring mit "props.:
  // const wateringInfo =
  //   wateringInterval === 1
  //     ? "Jeden Tag gießen"
  //     : `Alle ${props.wateringInterval} Tage gießen`;

  const daysUntil = getDaysUntilWatering(lastWatered || "2026-04-13", wateringInterval);

  return (
    <div className={"PlantCard"}>
      <header>
        <h2>{name}</h2>
        <div>📍{location}</div>
      </header>
      <section>
        <div>{wateringInfo}</div>
        {lastWatered ? <div>Zuletzt: {lastWatered}</div> : null }
        <div className={daysUntil < 0 ? "error-message" : "success-message"}>Nächstes Mal gießen in {daysUntil} Tagen</div>
      </section>
    </div>
  );
}