# Daten vom Server lesen und schreiben

# Dateien

- src/components/App.tsx
- src/components/PlantForm.tsx

# Aufgabe

* Lese die Pflanzen-Daten vom Server
* Speicher die Pflanzen-Daten aus dem Formular auf dem Server

# Vorbereitung

- Bitte stelle sicher, dass dein Backend-Prozess läuft!
- Dazu im `backend`-Verzeichnis dieses Repositories das npm-Script `start` ausführen
    - `npm run backend`
- Der Server läuft auf http://localhost:7200
- Du kannst prüfen, ob er läuft, in dem Du http://localhost:7200/api/plants im Browser öffnest
    - Dann sollte eine Liste von JSON-Objekten zurückgeliefert werden

# Schritte

*Das Laden und Speichern der Daten machen wir hier sehr "low level". Für "echte" Anwendungen würde ich in jedem Fall eine Bibliothek (TanStack Query) empfehlen, die Lösungen für viele typische Probleme bietet. Das wird auch in der [React Dokumentation empfohlen](https://react.dev/reference/react/useEffect#what-are-good-alternatives-to-data-fetching-in-effects).*

1. Füge in deiner `App`-Komponente einen State hinzu, der ein Array von `Plant`-Objekten hält
2. Render in `App` einen Button zum Lesen der Daten
    - Wenn auf den Button geklickt wird, lade mit `fetch` oder `ky` die Pflanzen vom Server (Beispiel siehe unten)
        - Endpunkt: "GET http://localhost:7200/api/plants"
    - Verwende `zod` um die gelesenen Daten zu validieren (Liste von `Plant`-Objekten)
    - Wenn die Daten gültig sind, setze sie in den State
    - Verwende deine `PlantCardList`-Komponente, um die gelesenen Pflanzen anzuzeigen
3. Speicher die Daten aus dem `PlantForm` auf dem Server
    - Die `handleSave`-Funktion gibt es dort bereits
    - Die Daten des Formulars kannst du 1:1 so auf den Server speichern
    - Verwende dazu den Endpunkt "http://localhost:7200/api/plants" mit einem POST Request
        - Der Body sind die Daten aus dem Formular
        - Wenn du ky verwendest, kannst du die Eigenschaft `json` setzen
        - Wenn du fetch verwendest, musst du `body` verwenden und das Objekt selbst in einen String verwandeln (
          `JSON.stringify()`)
            - Außerdem musst dann selbst den HTTP Header `content-type` auf `application/json` setzen
        - Lies das Ergebnis vom Server und zeige es auf der Konsole an
        - Du kannst das Ergebnis auch mit zod validieren lassen. Der Server schickt das neue Pflanzen-Objekt zurück.
            - Feedback für den Benutzer bauen wir im nächsten Schritt
            
# Hintergrund: ky oder fetch

## fetch

- Standard API im Browser (keine externe Bibliothek notwendig)
- Dokumentation: https://developer.mozilla.org/de/docs/Web/API/Fetch_API
- API ist sehr low-level
  - Rückgabewert muss explizit überprüft werden (HTTP Fehler führen nicht zu Errors)
  - Bei POST muss Payload manuell in JSON-String überführt werden, Content-Type-Header explizit gesetzt werden

**Beispiel GET:**

```typescript jsx

async function loadData() {
	const response = await fetch("http://localhost:7200/api/plants");
	// im richtigen Leben hier noch check, ob response.ok ist
	const plants = await response.json(); // Payload auslesen
    return plants as Plant[];
}
```

**Beispiel POST:**

```typescript jsx

async function savePlant(plant: Plant) {
	const response = await fetch("http://localhost:7200/api/plants", {
	  method: "POST", // HTTP Methode
	  headers: { "content-type": "application/json"},
	  body: JSON.stringify(plant) // manuell JavaScript-Objekt in String konvertieren
	});
	if (response.ok) {
	  // alles gut
	}
}
```


## ky

- Kleine Wrapper-Bibliothek um `fetch`
- Doku: https://github.com/sindresorhus/ky
- Etwas vereinfachte API gegenüber fetch, z.B.:
  - kein `response.ok`-Check notwendig 
  - automatische Konvertierung des Ergebnisses aus JSON-String in JavaScript-Objekte
  - Explizite Methoden für alle HTTP Methoden
- Dokumentation: https://github.com/sindresorhus/ky

**Beispiel GET:**

```typescript jsx

async function loadData() {
	// .json darf direkt aufgerufen werden (ohne zusätzliches await)
    // Angabe des TypeScript-Typs direkt möglich
    // keine Überprüfung auf Fehler notwendig (wenn Return Code 4xx oder 5xx ist,
    // wird ein Error geworfen)
	const plants = await ky("http://localhost:7200/api/plants")
        .json<Plant[]>();
	return plants;
}
```

**Beispiel POST:**

```typescript jsx

async function savePlant(plant: Plant) {
	const response = await ky.post("http://localhost:7200/api/plants", {
	  // HTTP-Methode ergibt sich aus ky.post()
	  // content-type-Header wird automatisch gesetzt
	  // mit "json" wird das übergebene Objekt automatisch in JSON-String umgewandelt
	  json: plant 
    }); 
	if (response.ok) {
	  // alles gut
	}
}
```

- Achtung: **Retry**!
  - ky hat einen Retry-Mechnanismus eingebaut. Wenn es beim Lesen der Daten zu Fehlern kommt, versucht, ky es automatisch erneut.  (https://github.com/sindresorhus/ky?tab=readme-ov-file#retry)
  - Auch TanStack Query hat so einen Mechanismus eingebaut. Wenn man beide verwendet, kommt es also zu "Dopplungen" beim Retry
  - Empfehlung: wenn du (später) ky mit TanStack Query verwendest, _in ky `retry` abschalten_`:
  - `ky.get("....", { retry: 0 })`
  - Das kann man grundsätzlich auch global mit `ky.extend` bzw. `ky.create` machen 
    - siehe https://github.com/sindresorhus/ky?tab=readme-ov-file#kyextenddefaultoptions
    - bzw. https://github.com/sindresorhus/ky?tab=readme-ov-file#kycreatedefaultoptions


# Material
- `parse` von zod zum Validieren von Objekten: https://zod.dev/basics?id=parsing-data
- JavaScript promises:
    - "async" functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    - "await" keyword: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
    - Promise objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    - 
