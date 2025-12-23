# Unit-Tests mit Vitest

# Dateien

- src/components/date-utils.test.ts (anlegen!)

# Aufgabe

- Schreibe Unit-Tests für die `getDaysUntilWatering`-Funktion
- Diese Funktion liefert die Anzahl Tage zurück, bis eine Pflanze das nächste Mal gegossen werden muss
- Dazu nimmt sie zwei Parameter entgegen. Das Datum (`YYYY-MM-DD`), an die Pflanze das letzte Mal gegossen worden ist und das Interval (Anzahl Tage) in der die Pflanze gegossen werden muss
- Herausforderung beim Testen: die Funktion arbeitet mit `Date`, um den aktuellen Tag zu ermitteln und auf dessen Basis zu berechnen, wie viele Tage noch bis zum nächsten Gießen vergehen...

# Schritte

1. Lege die Datei `src/components/date-utils.test.ts` an
    - Achtung: Auf die Dateiendung `.test.ts` achten!
2. Implementiere dort eine oder mehrere Testfälle (mit `test` oder `it` von vitest), um das Verhalten von `getDaysUntilWatering` sicherzustellen
    - Du musst dazu das aktuelle Datum mocken, sonst funktioniert dein Test heute, aber morgen nicht mehr 🥺
    - Dazu kannst du `setSystemTime` von vitest verwenden.
      - Achtung! Du musst die gemockte Zeit nach dem Test wieder zurücksetzen...
3. Du kannst deine Tests ausführen:
    - Entweder direkt aus der IDE (in IntelliJ/Webstorm wie gewohnt über die grünen Pfeile neben einem Testfall)
    - Über die Kommandozeile `npm run test:unit`
        - In diesem Fall wird Vitest im "watch"-Modus gestartet, d.h. der Runner wird nach der Ausführung nicht beendet. Sobald du Änderungen im Source-Code machst und speicherst, werden die Tests also automatisch erneut ausgeführt.

# Material

- Vitest: https://vitest.dev/
    - `expect`: https://vitest.dev/api/expect.html
- `setSystemTime`: https://vitest.dev/api/vi.html#vi-setsystemtime
- `afterEach`-Livecycle-Funktion: https://vitest.dev/api/#aftereach
