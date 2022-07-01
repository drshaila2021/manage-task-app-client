import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "./Loading";

const ToDoList = () => {
  const [status, setStatus] = useState(true);
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(task);
  };

  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery(["tasksQuery"], () =>
    fetch(`https://young-peak-50927.herokuapp.com/addtask`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const updateTaskStatus = {
    taskStatus: false,
  };

  const handleTaskCompleted = (e, taskId) => {
    console.log(taskId);
    const url = `https://young-peak-50927.herokuapp.com/${taskId}`;

    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateTaskStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  const handleTaskEdit = (e, taskId) => {
    e.prevent.default();

    console.log(taskId);
  };

  console.log(tasks);
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <h2 className="card-title">To Do List</h2>
        {tasks.map(
          (task) =>
            task.taskStatus && (
              //   <form key={task._id}>
              //     <input
              //       type="radio"
              //       className="radio mx-2"
              //       onClick={() => handleTaskCompleted(task._id)}
              //     />
              //     {task.taskDescription}
              //     <button
              //       className="btn btn-ghost mx-2"
              //       onClick={() => handleTaskEdit(task._id)}
              //     >
              //       Edit Task
              //     </button>
              //   </form>

              <form key={task._id} onSubmit={handleSubmit}>
                <div className="flex">
                  <input
                    type="text"
                    id="updateTask"
                    className="input input-bordered w-full max-w-xs"
                    name="updateTask"
                    placeholder={task.taskDescription}
                    //value={task}
                    onChange={(event) => setTask(event.target.value)}
                    autoComplete="off"
                  />
                  <button type="submit" className="btn btn-ghost"></button>
                </div>
              </form>
            )
        )}
      </div>
    </div>
  );
};

export default ToDoList;
