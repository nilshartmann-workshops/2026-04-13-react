import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FieldError, useForm } from "react-hook-form";
import { NewPlant } from "./types.ts";
import IntervalSelector from "./IntervalSelector.tsx";

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
      <ErrorMessage error={form.formState.errors.name} />
    </div>

    <div className={"FormControl"}>
      <label>Standort</label>
      <select {...form.register("location")}>
        <option value={""}>Standort wählen...</option>

        {locations.map(location => <option key={location} value={location}>{location}</option>)}
      </select>
      <ErrorMessage error={form.formState.errors.location} />
    </div>

    <div className={"FormControl"}>
      <Controller control={form.control}
                  name={"wateringInterval"}
                  render={(field) => {
                    return <IntervalSelector
                      interval={field.field.value}
                      onIntervalChange={newInterval => field.field.onChange(newInterval)} />
                  }}
      />
      <ErrorMessage error={form.formState.errors.wateringInterval} />

    </div>

    <div className={"FormControl"}>
      <label>
        Zuletzt gegossen
      </label>
      <input type={"date"} {...form.register("lastWatered", {
        setValueAs: value => value === "" ? undefined : value
      })}/>
      <ErrorMessage error={form.formState.errors.lastWatered} />
    </div>

    <div className={"FormButtons"}>
      <button type={"button"} className={"secondary"} onClick={() => form.reset()}>Formular leeren</button>
      <button type={"submit"} className={"primary"}>Pflanze speichern</button>
    </div>

  </form>

}

type ErrorMessageProps = {
  error: FieldError | undefined  // Union Type
}

function ErrorMessage(props: ErrorMessageProps) {

  if (!props.error) { // Type Narrowing, Type Guard
    return null;
  }

  console.log("props.error", props.error);

  return <span className={"error-message"}>{props.error.message}</span>
}