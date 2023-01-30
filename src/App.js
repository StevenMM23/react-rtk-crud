
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './components/TaskList';
import { TaskForm } from './components/TaskForm';

function App() {

  const taskState = useSelector((state) => state.tasks)
  console.log(taskState);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default App;
