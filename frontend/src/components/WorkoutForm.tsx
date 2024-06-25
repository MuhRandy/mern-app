import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

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
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-bold text-lg">Add a New Workout</h2>

      <label className="block">Exercise Title:</label>
      <input
        className="block p-[10px] mb-5 w-full border-[#ddd] border-[1px] border-solid rounded box-border"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label className="block">Load (in Kg):</label>
      <input
        className="block p-[10px] mb-5 w-full border-[#ddd] border-[1px] border-solid rounded box-border"
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <label className="block">Reps:</label>
      <input
        className="block p-[10px] mb-5 w-full border-[#ddd] border-[1px] border-solid rounded box-border"
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
