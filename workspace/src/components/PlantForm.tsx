
const locations = [
  "Wohnzimmer",
  "Arbeitszimmer",
  "Küche",
  "Schlafzimmer",
  "Bad",
];

export default function PlantForm() {

  return <form>
    <div className={"FormControl"}>
      <label>Name der Pflanze</label>
      <input type={"text"} />
    </div>

    <div className={"FormControl"}>
      <label>Standort</label>
      <select>
        <option value={""}>Standort wählen...</option>

        {locations.map(location => <option key={location} value={location}>{location}</option>)}
      </select>
    </div>

    <div className={"FormControl"}>
      <label>
        Zuletzt gegossen
      </label>
      <input type={"date"} />
    </div>

    <div className={"FormButtons"}>
      <button type={"submit"} className={"primary"}>Pflanze speichern</button>
    </div>

  </form>

}