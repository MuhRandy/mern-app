import { useEffect } from "react";
import WorkoutDetail from "../components/WorkoutDetail";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  const { state, dispatch } = useWorkoutsContext();

  const { workouts } = state;

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts/");
      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_WORKOUTS",
          payload: json,
          workout: json[0],
        });
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
