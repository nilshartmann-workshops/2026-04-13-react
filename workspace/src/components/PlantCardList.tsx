import { Plant } from "./types.ts";
import PlantCard from "./PlantCard.tsx";

type PlantCardListProps = {
  plants: Plant[]
  // plants: Array<Plant>
}
export default function PlantCardList(props: PlantCardListProps) {
  return <div className={"PlantCardList"}>
    { props.plants.map( ((p, ix) => {
        return <PlantCard
          key={p.id}
          name={p.name}
          location={p.location}
          wateringInterval={p.wateringInterval}
          lastWatered={p.lastWatered}
        />
        }
      ))
    }
  </div>;
  // <PlantCard .... >
}