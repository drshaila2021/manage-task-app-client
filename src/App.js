import { Route, Routes } from "react-router-dom";
import "./App.css";

import Calender from "./components/Calender";
import Completed from "./components/Completed";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="todolist" element={<ToDoList></ToDoList>}></Route>
        <Route path="completed" element={<Completed></Completed>}></Route>
        <Route path="calender" element={<Calender></Calender>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
