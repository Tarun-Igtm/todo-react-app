import {
  useState,
  useEffect,
} from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import { FaRocket } from "react-icons/fa";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] =
    useState("all");

  useEffect(() => {
    const savedTasks =
      localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter(
      (_, index) =>
        index !== indexToDelete
    );

    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter(
  (t) => t.completed
).length;

const pendingTasks = tasks.filter(
  (t) => !t.completed
).length;

  const filteredTasks = tasks.filter(
    (t) => {
      if (filter === "completed") {
        return t.completed;
      }

      if (filter === "pending") {
        return !t.completed;
      }

      return true;
    }
  );

  return (
    <div className="container">
      <h1 className="app-title">
  <FaRocket />
  Todo App
</h1>
      <div className="task-stats">
  <div className="stat-card">
    <h3>{tasks.length}</h3>
    <p>Total</p>
  </div>

  <div className="stat-card">
    <h3>{completedTasks}</h3>
    <p>Completed</p>
  </div>

  <div className="stat-card">
    <h3>{pendingTasks}</h3>
    <p>Pending</p>
  </div>
</div>

      <TodoForm
        task={task}
        setTask={setTask}
        addTask={addTask}
      />

      <FilterButtons
        setFilter={setFilter}
      />

      <TodoList
        filteredTasks={filteredTasks}
        toggleComplete={
          toggleComplete
        }
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;