import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      {" "}
      <h2 className="text-2xl my-6">Calender</h2>
      <div className="flex justify-center">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default Calender;
