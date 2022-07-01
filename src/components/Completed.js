import React from "react";
import { useQuery } from "react-query";
import Loading from "./Loading";

const Completed = () => {
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

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Completed Task</h2>
        {tasks.map(
          (task) =>
            !task.taskStatus && (
              <ul key={task._id}>
                <li>{task.taskDescription}</li>
              </ul>
            )
        )}
      </div>
    </div>
  );
};

export default Completed;
