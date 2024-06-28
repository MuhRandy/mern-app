type WorkoutDetailProps = {
  workout: {
    title: string;
    reps: number;
    load: number;
    createdAt: string;
  };
};

const WorkoutDetail = ({ workout }: WorkoutDetailProps) => {
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
    </div>
  );
};

export default WorkoutDetail;
