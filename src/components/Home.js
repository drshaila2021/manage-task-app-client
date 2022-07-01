import React from "react";
import AddTask from "./AddTask";
import Calender from "./Calender";
import Completed from "./Completed";
import ToDoList from "./ToDoList";

const Home = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3 mx-6">
      <AddTask></AddTask>

      <ToDoList></ToDoList>

      <Completed></Completed>
    </div>
  );
};

export default Home;
