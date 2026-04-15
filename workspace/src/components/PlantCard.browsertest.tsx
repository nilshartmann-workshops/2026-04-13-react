import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import PlantCard from "./PlantCard.tsx";

test("Plantcard", async () => {
  const screen = await render(
    <PlantCard name={"Tulpe"} location={"Wohnzimmer"} wateringInterval={4} />
  );

  await expect.element(screen.getByText("Tulpe")).toBeInTheDocument();
})