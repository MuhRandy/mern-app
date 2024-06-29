import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { IconTrash } from "@tabler/icons-react";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
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
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <IconTrash
        onClick={handleClick}
        className="absolute top-5 right-5 cursor-pointer text-error"
      />
    </div>
  );
};

export default WorkoutDetail;
