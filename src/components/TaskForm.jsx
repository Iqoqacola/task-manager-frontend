import { useState } from "react";
import { useTaskContext } from "../hooks/useTaskContext";
import { useAuthContext } from "../hooks/useAuthContext";

const TaskhtmlForm = () => {
  const { dispatch } = useTaskContext();
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");
  const [due, setDue] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [group, setGroup] = useState("Individu");
  const [emptyFields, setEmptyFields] = useState([]);
  const { user } = useAuthContext();

  const handleChangeGroup = (e) => {
    setGroup(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { subject, desc, group, due };
    // console.log(group);

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/api/task`,
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${user.token}`,
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
      setSuccess("");
    }

    if (response.ok) {
      setError(null);
      setSubject("");
      setDesc("");
      setDue("");
      setEmptyFields([]);
      dispatch({ type: "CREATE_TASK", payload: json });
      setSuccess(`New task added: ${JSON.stringify(task.subject)}`);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <label>Subject</label>
      <input
        type="text"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
        className={`input-text ${
          emptyFields.includes("subject") ? "error" : ""
        }`}
      ></input>
      <label>Description</label>
      <input
        type="text"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
        className={`input-text ${emptyFields.includes("desc") ? "error" : ""}`}
      ></input>
      <input
        type="radio"
        id="Individu"
        name="task"
        value="Individu"
        className="radio"
        defaultChecked
        onChange={handleChangeGroup}
      />
      <label htmlFor="Individu" className="radio">
        Individu
      </label>
      <input
        type="radio"
        id="Kelompok"
        name="task"
        value="Kelompok"
        className="radio"
        onChange={handleChangeGroup}
      />
      <label htmlFor="Kelompok" className="radio">
        Kelompok
      </label>
      <label>Due</label>
      <input
        type="date"
        onChange={(e) => setDue(e.target.value)}
        value={due}
        className={`input-text ${emptyFields.includes("due") ? "error" : ""}`}
      ></input>
      <button>Add new task</button>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
    </form>
  );
};

export default TaskhtmlForm;
