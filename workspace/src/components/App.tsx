import PlantCard from "./PlantCard";

export default function App() {
  return (
    <div className={"AppContainer"}>
      <PlantCard
        name={"Aloe Vera"}
        location={"Schlafzimmer"}
        wateringInterval={12}
        lastWatered={"2025-06-16"}
      />

      <PlantCard
        name={"Orchidee"}
        location={"Wohnzimmer"}
        wateringInterval={20}
      />
    </div>
  );
}
