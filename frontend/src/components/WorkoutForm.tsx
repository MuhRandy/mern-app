import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import Label from "./ui/Label";
import Input from "./ui/Input";
import { cn } from "../utils/cn";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const { state, dispatch } = useWorkoutsContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      console.log("new workout added", json);
      dispatch({
        type: "CREATE_WORKOUT",
        payload: state.workouts,
        workout: json,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-bold text-lg">Add a New Workout</h2>

      <Label>Exercise Title:</Label>
      <Input
        className={cn({
          "border border-error border-solid": emptyFields.includes("title"),
        })}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <Label>Load (in Kg):</Label>
      <Input
        className={cn({
          "border border-error border-solid": emptyFields.includes("load"),
        })}
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <Label>Reps:</Label>
      <Input
        className={cn({
          "border border-error border-solid": emptyFields.includes("reps"),
        })}
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button
        type="submit"
        className="bg-primary text-white p-[10px] rounded cursor-pointer"
      >
        Add Workout
      </button>
      {error && (
        <div className="p-[10px] bg-[#ffefef] border border-solid border-error text-error rounded m-[20px_0]">
          {error}
        </div>
      )}
    </form>
  );
};

export default WorkoutForm;
