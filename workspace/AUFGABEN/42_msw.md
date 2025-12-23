# Integrationtests

# Dateien

- src/components/App.browsertest.tsx (anlegen)

# Aufgabe

* Schreibe einen Testfall für die App-Komponente inklusive Tests des Suspense Boundary und des Netzwerkverkehrs

# Schritte

1. Beende das Backend, damit du nicht aus Versehen API-Calls gegen das echte Backend machst.
2. Lege die Datei `src/components/App.browsertest.tsx` an
    - Achte auf die Dateiendung `.browsertest.tsx`
    - Ein Grundgerüst für die Datei findest am Ende dieser Aufgabenbeschreibung.
3. Du musst mit msw den Request zu `/api/plants` mocken
    - Schreibe dazu einen Request Handler, der auf `get` `http://localhost:7200/plant`, horcht und eine Liste von Pflanzen-Objekten zurückliefert (`Plant[]`)
4. Da wir einen Integrationtest mit "echtem" TanStack Query Client machen wollen, musst du in deinem Test rendern:
    - den `QueryClientProvider`
    - die `App` Komponente
    - ...also ähnlich wie das, was wir auch in `main.tsx` machen.
5. Wenn die App-Komponente im Test gerendert wird, kannst du zum Beispiel verifizieren:
    - Die Ausgabe des Suspense-Boundaries wurde gerendert
    - Danach wird mindestens eine der Pflanzen aus den Mock-Daten dargestellt
    - Kannst du auch den Error Boundary testen? 🤔

# Material

- MSW: https://mswjs.io/
    - Intercepting Requests: https://mswjs.io/docs/http/intercepting-requests/
    - Mocking Responses: https://mswjs.io/docs/http/mocking-responses/
    - Error Responses: https://mswjs.io/docs/http/mocking-responses/error-responses

# Gerüst für die Testdatei App.browsertest.tsx

```tsx
import {QueryClientProvider} from "@tanstack/react-query";
import {delay, http, HttpResponse} from "msw";
import {setupWorker} from "msw/browser";
import {BrowserRouter, Route, Routes} from "react-router";
import {afterEach, beforeAll, expect, test} from "vitest";
import {render} from "vitest-browser-react";

import {createQueryClient} from "../create-query-client.tsx";
import {Plant} from "../types.ts";
import Home from "./Home.tsx";

const worker = setupWorker(
        // todo: Handler für GET http://localhost:7200/plants einfügen
        // Mock-Daten zurückliefern (TypeScript Typ: Plant[])
);

beforeAll(async () => await worker.start());
afterEach(() => worker.resetHandlers());

test("Fetching and Rendering list of plants", async () => {
   const screen = render(
           <QueryClientProvider client={createQueryClient()}>
              {/*todo: App-Komponente rendern */}
           </QueryClientProvider>,
   );

   // todo:
   //   Tests implementieren, z.B.
   //    - werden die geladenen Pflanzen angezeigt?
   //    - Wird der Suspense-Fallback angezeigt?
   //    - wird im Falle eines Fehlers das Error Boundary angezeigt?
});

```
