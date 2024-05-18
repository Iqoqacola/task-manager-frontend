import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const useTaskContext = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }
  return taskContext;
};
