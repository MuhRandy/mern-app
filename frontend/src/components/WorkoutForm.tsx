import { ChangeEvent, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import Label from "./ui/Label";
import Input from "./ui/Input";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

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

    if (!response.ok) setError(json.error);
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
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
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        value={title}
      />

      <Label>Load (in Kg):</Label>
      <Input
        type="number"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setLoad(e.target.value)}
        value={load}
      />

      <Label>Reps:</Label>
      <Input
        type="number"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setReps(e.target.value)}
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
