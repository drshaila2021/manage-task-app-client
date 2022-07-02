import React, { useState } from "react";

const AddTask = ({ refetch }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(task);

    fetch("https://young-peak-50927.herokuapp.com/addtask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ taskDescription: task, taskStatus: true }),
    })
      .then((res) => res.json())
      .then((result) => refetch());

    setTask("");
  };

  return (
    <div>
      <h2 className="text-bold text-start mt-4 font-bold mb-1">Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="task"
          className="input input-bordered w-full max-w-xs"
          name="task"
          placeholder="Write Your Task and Enter"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          autoComplete="off"
        />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default AddTask;
