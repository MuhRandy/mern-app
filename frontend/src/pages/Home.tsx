import { useEffect, useState } from "react";
import WorkoutDetail from "../components/WorkoutDetail";

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
      try {
        const response = await fetch("/api/workouts/");
        const result = await response.json();

        if (response.ok) {
          setWorkouts(result);
        }
      } catch (err) {
        console.log(err);
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
    </div>
  );
};

export default Home;
