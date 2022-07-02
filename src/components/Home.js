import React from "react";
import AddTask from "./AddTask";
import Calender from "./Calender";
import Completed from "./Completed";
import Footer from "./Footer";
import ToDoList from "./ToDoList";

const Home = () => {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3 mx-6 my-10">
        {/* <AddTask></AddTask> */}

        <ToDoList></ToDoList>

        <Completed></Completed>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
