import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import TaskList from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList/>} />
          <Route path="/create-task" element={<TaskForm/>} />
          <Route path="/edit-task/:id" element={<TaskForm/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
