import React, { useState } from "react";
import { useQuery } from "react-query";
import AddTask from "./AddTask";
import Loading from "./Loading";

const ToDoList = () => {
  // const [status, setStatus] = useState(true);
  const [taskIdEdit, setTaskIdEdit] = useState("");
  const [modTask, setModTask] = useState("");

  // const handleSubmit = (event, taskId) => {
  //   event.preventDefault();
  //   console.log(modtask, taskId);
  // };
  console.log(taskIdEdit);
  console.log(modTask);

  const updatedTask = {
    taskDescription: modTask,
  };
  console.log();
  const handleSubmit = (event) => {
    event.preventDefault(updatedTask);

    const url = `https://young-peak-50927.herokuapp.com/addtask/edit/${taskIdEdit}`;
    console.log(url);

    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
    setModTask("");
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

  const handleTaskCompleted = (taskId) => {
    const url = `https://young-peak-50927.herokuapp.com/addtask/${taskId}`;

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

  const handleTaskEditId = (taskId) => setTaskIdEdit(taskId);

  console.log(tasks);
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <h2 className="card-title">To Do List</h2>
        <AddTask refetch={refetch}></AddTask>
        <h2 className="text-bold text-start mt-4 mb-1 font-bold">
          Task in List
        </h2>
        {tasks.map(
          (task) =>
            task.taskStatus && (
              <div className="text-start flex" key={task._id}>
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs mr-2"
                  onClick={() => handleTaskCompleted(task._id)}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  value={task?.taskDescription || ""}
                  placeholder={task?.taskDescription || ""}
                  autoComplete="off"
                />

                <div>
                  <label
                    htmlFor="my-modal"
                    className="btn modal-button btn-ghost"
                    onClick={() => handleTaskEditId(task._id)}
                  >
                    Edit Task
                  </label>

                  <input
                    type="checkbox"
                    id="my-modal"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <label
                        htmlFor="my-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="font-bold text-center">Update Task</h3>

                      <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
                      >
                        <input
                          type="text"
                          name="modtask"
                          value={modTask}
                          onChange={(event) => setModTask(event.target.value)}
                          className="input input-bordered w-full max-w-xs"
                        />

                        <input
                          type="submit"
                          value="Submit"
                          className="btn w-full max-w-xs"
                        />
                      </form>

                      <div className="modal-action flex justify-center ">
                        <label
                          htmlFor="my-modal"
                          className="btn px-5 w-full max-w-xs"
                        >
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ToDoList;
