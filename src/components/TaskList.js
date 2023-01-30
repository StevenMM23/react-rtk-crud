import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/taskList.css";
import { deleteTask } from "../features/tasks/taskSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const TaskList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const task = useSelector((state) => state.task);
  console.log(task);
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  const handleEdit = (id) => {
    navigate("/create-task");
  };
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-4/6 ">
        <header className="flex justify-center flex-col">
          <h1 className="font-extrabold decoration-dashed text-5xl text-center">
            {task.length > 1 ? "Tasks" : "Task"} : {task.length}
          </h1>
          <div className="mt-10">
            <Link
              className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded-md  text-md mt-5  text-center "
              to={"/create-task"}
            >
              Create Task
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-5 mt-10">
          {task.map((task) => {
            return (
              <div className="bg-neutral-800 p-5 rounded-xl" key={task.id}>
                <h3 className="text-center mb-3 font-bold">{task.title}</h3>
                <p className="text-center font-thin">{task.description}</p>

                <header className="flex  gap-x-2">
                  <div className="flex  flex-col gap-3 mt-3 w-full">
                    <button
                      className="bg-red-500 hover:bg-red-700 px-2 py-2 text-sm rounded-lg  "
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </button>
                    <Link
                      className="bg-zinc-600 hover:bg-zinc-700 text-center px-2 py-2 text-sm rounded-lg"
                      to={`/edit-task/${task.id}`}
                    >
                      Edit
                    </Link>
                  </div>
                </header>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
