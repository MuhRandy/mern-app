import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

type WorkoutDetailProps = {
  workout: {
    _id: string;
    title: string;
    reps: number;
    load: number;
    createdAt: string;
  };
};

const WorkoutDetail = ({ workout }: WorkoutDetailProps) => {
  const { state, dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({
        type: "DELETE_WORKOUT",
        payload: state.workouts,
        workout,
      });
      console.log(json);
    }
  };

  return (
    <div className="bg-white rounded m-[20px_auto] p-5 relative shadow-sm text-[#555]">
      <h2 className="mb-[10px] text-xl font-bold text-primary">
        {workout.title}
      </h2>
      <p>
        <strong>Load (Kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span
        onClick={handleClick}
        className="absolute top-5 right-5 cursor-pointer bg-[#f1f1f1] p-[6px] rounded-[50%] color-[#333]"
      >
        Delete
      </span>
    </div>
  );
};

export default WorkoutDetail;
