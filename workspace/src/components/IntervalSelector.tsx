import { ChangeEvent, useState } from "react";

export default function IntervalSelector() {
  const [interval, setInterval] = useState(1);

  const handleIntervalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valueAsString = e.target.value;

    // alternativ parseInt
    setInterval(Number(valueAsString));
  };

  // Validierung (z.B. keine negativen Zahlen) machen wir später

  return (
    <div className={""}>
      <label>Interval</label>
      <input type={"number"} value={interval} onChange={handleIntervalChange} />
      <button type="button" className={"sm"} onClick={() => setInterval(1)}>
        Dayly
      </button>
      <button type="button" className={"sm"} onClick={() => setInterval(7)}>
        Weekly
      </button>
      <button type="button" className={"sm"} onClick={() => setInterval(14)}>
        Biweekly
      </button>
      <div className={"px-1 text-sm"}>Alle {interval} Tage gießen</div>
    </div>
  );
}
