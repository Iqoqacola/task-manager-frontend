import { useEffect } from "react";
import TaskForm from "../components/TaskForm";
import { useTaskContext } from "../hooks/useTaskContext";
import TaskDetails from "../components/TaskDetails";
import { useAuthContext } from "../hooks/useAuthContext";

const Task = () => {
  const { tasks, dispatch } = useTaskContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/api/task", {
        headers: {
          authorization: `bearer ${user.token}`,
        },
      });
      const json = await response.json();

      dispatch({ type: "SET_TASK", payload: json });
    };

    getData();
  }, [dispatch]);

  return (
    <div className="pageTask">
      <div className="tasks">
        {tasks &&
          tasks.map((task) => <TaskDetails task={task} key={task._id} />)}
      </div>
      <TaskForm />
    </div>
  );
};

export default Task;
