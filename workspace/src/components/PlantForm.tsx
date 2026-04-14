import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewPlant } from "./types.ts";

const locations = [
  "Wohnzimmer",
  "Arbeitszimmer",
  "Küche",
  "Schlafzimmer",
  "Bad",
];

export default function PlantForm() {

  const form = useForm({
    resolver: zodResolver(NewPlant)
  });

  const handleFormSubmitForm = (data: NewPlant) => {
    console.log("Formular Daten", data);
  }

  const handleError = (err: any) => {
    console.log("Formular Fehler", err);
  }

  return <form onSubmit={form.handleSubmit(handleFormSubmitForm, handleError)}>
    <div className={"FormControl"}>
      <label>Name der Pflanze</label>
      <input type={"text"}
             {...form.register("name")}
      />
    </div>

    <div className={"FormControl"}>
      <label>Standort</label>
      <select {...form.register("location")}>
        <option value={""}>Standort wählen...</option>

        {locations.map(location => <option key={location} value={location}>{location}</option>)}
      </select>
    </div>

    <div className={"FormControl"}>
      <label>
        Zuletzt gegossen
      </label>
      <input type={"date"} {...form.register("lastWatered", {
        setValueAs: value => value === "" ? undefined : value
      })}/>
    </div>

    <div className={"FormButtons"}>
      <button type={"submit"} className={"primary"}>Pflanze speichern</button>
    </div>

  </form>

}