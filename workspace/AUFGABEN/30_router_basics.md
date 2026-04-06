# React Router

# Dateien

- src/main.tsx
- src/routes/__root.tsx (anlegen!)
- src/routes/AppLayout.tsx (anlegen!)
- src/routes/Home.tsx (anlegen!)
- src/routes/Add.tsx (anlegen!)

# Aufgabe

- Füge den TanStack Router hinzu, so dass du zwei Routen in deiner Anwendung hast: eine Route für die Liste und eine Route für das Formular

# Vorbereitung

- Der TanStack Router verwendet ein Vite Plug-in zum Generieren des benötigten Codes
- Das Plug-in ist bereits in `vite.config.ts` eingetragen, du musst es nur einkommentieren:
  - ```typescript
    import tanstackRouter from "@tanstack/router-plugin/vite"; // <-- hinzufügen
     // ...
     tanstackRouter({
      target: "react",
     }),
    ```
- 
# Schritte

1. Die "Root-Route", also der Einstiegspunkt für den Router muss sich in `src/routes/__root.tsx` befinden.
    - Lege das Verzeichnis `src/routes` an und darin die Datei `__root.tsx`:
    - ```typescript jsx
         import { createRootRoute, Outlet } from "@tanstack/react-router";
         import * as React from "react";

         export const Route = createRootRoute({
           component: RootComponent,
         });

         function RootComponent() {
           return (
             <div className="AppLayout">
               <Outlet />
             </div>
         );
      }
      ```
2. Starte den Vite Dev Server neu (Ctrl+C zum Abbrechen, dann `npm run dev`)
    - Das TanStack Router Plug-in für Vite sorgt dafür, dass basierend auf den Dateien unterhalb von `src/routes` die Routen-Konfiguration generiert wird
    - Die Datei heißt `src/routeTree.gen.ts`
    - Diese Datei sollte bei dir jetzt vom Plug-in erzeugt worden sein.
      - Ggf. Workspace synchronisieren, falls die IDE das nicht automatisch macht
    - Diese Datei wird bei Änderungen in `src/routes` jedesmal aktualisiert.
3. Aktivieren des Routers in `src/main.tsx`
    - Siehe Code unten
    - Wenn alles klappt geklappt, und du jetzt deine Anwendung aufrufst, müsste dort "Not found" erscheinen
    - Das liegt daran, dass wir noch keine Routen definiert haben.
4. Lege die Index-Route (`/`) an
   - Lege die Datei `routes/index.tsx` an
   - Der Code Generator von TanStack Router sollte die Routen-Konfiguration in der Datei generieren
     - Eventuell die Datei in der IDE synchronisieren, falls die IDE die Änderungen nicht merkt!
   - Als `RouteComponent` soll die `PlantCardListLoader`-Komponente gerendert werden (inklusive Error- und SuspenseBoundary) 
     - Genauso wie bisher in der `App`-Komponente. Du kannst den entsprechenden Code einfach hier in die `RouteComponent` kopieren
5. Lege die Datei `routes/add.tsx` an
  - Diese Datei soll als `RouteComponent` eine Komponente exportieren, die (zunächst) nur die `PlantForm`-Komponente rendert
6. Teste deine Anwendung
    - Wenn du http://localhost:3000 aufrufst, sollte die Pflanzen-Liste erscheinen
    - Wenn du http://localhost:3000/add aufrufst, sollte das Pflanzen-Formular erscheinen.
7. Implementiere eine einfache Navigation
    - Füge in der Datei `src/routes/__root.tsx` zwei Links hinzu:
      - einen Link auf `/` und einen Link auf (`/add`)

# `main.tsx` mit Router:

```typescript jsx
import "./index.css";
import "./setup-dayjs.ts";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";

import { createQueryClient } from "./create-query-client.tsx";
import { routeTree } from "./routeTree.gen";

const queryClient = createQueryClient();

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools />
  </QueryClientProvider>,
);

```

# Material

- TanStack Router: https://tanstack.com/router/latest/docs/overview
  - Routing Konzepte: https://tanstack.com/router/latest/docs/routing/routing-concepts
  - File based Routing (Namenskonventionen für Dateien): https://tanstack.com/router/latest/docs/routing/file-based-routing
  - `<Link>`-Komponente: https://tanstack.com/router/latest/docs/guide/navigation#absolute-links
