import React from "react";
import { useSelector } from "react-redux";
import "../styles/taskList.css"
const TaskList = () => {
  const task = useSelector((state) => state.task);
  console.log(task);
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} >
      {task.map((element) => {
        return (
          <div className="list-container">
            <p>{element}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
