import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

export const TaskForm = () => {
  const task = useSelector((state) => state.task);
  
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  function handlerOnChange(e) {
    setInput(e.target.value);
  }
  function handlerClick() {
    dispatch(addTask(input));
    setInput("")
  }
  return (
    <div>
      <p>{input}</p>
      <input type="text" value= {input} onChange={handlerOnChange} />
      <button type="submit" onClick={handlerClick}>
        Add Something
      </button>
    </div>
  );
};
