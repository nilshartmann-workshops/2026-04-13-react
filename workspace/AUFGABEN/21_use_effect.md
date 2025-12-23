# Komponenten mit der "Außenwelt" synchronisieren

# Dateien

- src/components/App.tsx

# Aufgabe

* Lade die Pflanzen-Daten in einem Effekt

# Schritte

1. Füge in deiner `App`-Komponente einen einfachen State hinzu (Counter)
    - Implementiere einen Button, mit dem der Counter erhöht werden kann
    - Dieser State dient nur dazu, dass wir die App-Komponente re-rendern lassen können

2. Baue den bisherigen "Lade Pflanzen"-Button aus
3. Verschiebe die Logik zum Lesen der Pflanzen in einen Effekt
    - Stelle sicher, dass der Effekt nur einmal - beim initialen Mount der Komponente - ausgeführt wird
    - Wenn auf deinen Counter-Button geklickt wird, sollen die Daten _nicht_ erneut geladen werden!

# Material

- `useEffect`-Hook: https://react.dev/reference/react/useEffect
- Wichtiger Hinweis aus der React-Doku zu Seiteneffekten:
    - Seiteneffekte sollte man am besten in einem Event-Handler (z.B. Button Click, Mouse Move etc.) implementieren
    - Event-Handler dürfen Seiteneffekte haben, unsere Komponenten hingegen müssen "pure" sein, dürfen also nicht mit der Außenwelt interagieren
    - `useEffect` solte immer nur die letzte Option sein:
      > In React, **side effects usually belong inside event handlers**. Event handlers are functions that React runs when you perform some action—for example, when you click a button. Even though event handlers are defined inside your component, they don’t run during rendering! So event handlers don’t need to be pure.
      >
      > If you’ve exhausted all other options and can’t find the right event handler for your side effect, you can still attach it to your returned JSX with a useEffect call in your component. This tells React to execute it later, after rendering, when side effects are allowed. **However, this approach should be your last resort**.
      >
      > (https://react.dev/learn/keeping-components-pure#where-you-_can_-cause-side-effects)
- auch das ist ein Grund, eine Bibliothek für das Data Fetching zu nehmen und das Laden von Daten _nicht_ über Effekte zu machen! 
