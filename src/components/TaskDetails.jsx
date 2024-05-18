import { useAuthContext } from "../hooks/useAuthContext";
import { useTaskContext } from "../hooks/useTaskContext";

const TaskDetails = ({ task }) => {
  const { dispatch } = useTaskContext();
  const { user } = useAuthContext();

  const handleDelete = async () => {
    const response = await fetch("/api/task/" + task._id, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${user.token}`,
      },
    });
    const json = await response.json();

    dispatch({
      type: "DELETE_TASK",
      payload: json,
    });
  };
  return (
    <div className="task-details">
      <div>
        <h4>{task.subject}</h4>
        <p>{task.group}</p>
        <p>{task.desc}</p>
        <p>{task.due}</p>
      </div>
      <button className="error" onClick={handleDelete}>
        HAPUS
      </button>
    </div>
  );
};

export default TaskDetails;
