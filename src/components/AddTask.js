import React, { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(task);

    fetch("http://localhost:5000/addtask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ taskDescription: task, taskStatus: true }),
    })
      .then((res) => res.json())
      .then((result) => {});

    setTask("");
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl my-4">
      <div className="card-body">
        <h2 className="card-title">Add Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="task"
            className="input input-bordered w-full max-w-xs"
            name="task"
            placeholder="Write task and enter"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            autoComplete="off"
          />

          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
