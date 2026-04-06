import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import PlantCardListLoader from "../components/PlantCardListLoader.tsx";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ErrorBoundary
      fallback={
        <div className={"error-message"}>Fehler beim Laden der Pflanzen 🥀</div>
      }
    >
      <Suspense
        fallback={
          <div className={"CardListFallback"}>Pflanzen werden geladen...</div>
        }
      >
        <PlantCardListLoader />
      </Suspense>
    </ErrorBoundary>
  );
}
