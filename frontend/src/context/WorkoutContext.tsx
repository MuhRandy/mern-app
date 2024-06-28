import { Dispatch, ReactNode, createContext, useReducer } from "react";

type WorkoutContextProviderProps = {
  children: ReactNode;
};

type StateType = {
  workouts: WorkoutType[];
};

type ActionType = {
  type: "SET_WORKOUTS" | "CREATE_WORKOUT";
  payload: WorkoutType[];
  workout: WorkoutType;
};

type WorkoutType = {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
};

type WorkoutContext = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
};

export const WorkoutContext = createContext<WorkoutContext>({
  state: {
    workouts: [],
  },
  dispatch: () => {},
});

export const workoutReducer = (
  state: StateType,
  action: ActionType
): StateType => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };

    case "CREATE_WORKOUT":
      return {
        workouts: [action.workout, ...state.workouts],
      };

    default:
      return state;
  }
};

export const WorkoutContextProvider = ({
  children,
}: WorkoutContextProviderProps) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: [],
  });

  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
