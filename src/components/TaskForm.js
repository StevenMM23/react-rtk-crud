import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

import { updateTask } from "../features/tasks/taskSlice";
export const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const tasks = useSelector((state) => state.task);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(addTask({ id: uuid(), ...task }));
    }
    navigate("/");
  };
  return (
    <div className=" grid h-screen  place-items-center ">
      <form
        className="  bg-zinc-800 w-3/4 p-8 rounded-xl "
        onSubmit={handlerSubmit}
      >
        <div className="mb-6">
          <label
            for="text"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Title
          </label>
          <input
            name="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            required
            type="text"
            value={task.title}
            placeholder="Title"
          />
        </div>
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Description
        </label>
        <textarea
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          name="description"
          placeholder="Description"
          value={task.description}
        ></textarea>
        <div>
          <button
            className="bg-indigo-600 w-full hover:bg-indigo-800 px-5 py-2 rounded-md  text-md mt-5  text-center"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
