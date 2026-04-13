import PlantCard from "./PlantCard.tsx";

export default function App() {
  return (
    <div className={"AppContainer"}>
      <PlantCard
        name={"Tulpe"}
        location={"Küche"}
        wateringInterval={7}
        lastWatered="2026-04-13"
      />
    </div>
  );
}
