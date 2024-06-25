import { useEffect, useState } from "react";
import WorkoutDetail from "../components/WorkoutDetail";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState<
    | null
    | {
        _id: string;
        title: string;
        reps: number;
        load: number;
        createdAt: string;
      }[]
  >(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts/");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-[100px]">
      <div>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetail key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
