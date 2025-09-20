import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import "./App.css";

const App = () => {
  const initialTasks = [
    { id: 1, title: "Learn React", description: "Finish React hooks tutorial", completed: false },
    { id: 2, title: "Gym Workout", description: "1 hour evening session", completed: true },
    { id: 3, title: "Read a Book", description: "Read 20 pages of self-help book", completed: false },
    { id: 4, title: "Buy Groceries", description: "Milk, eggs, fruits", completed: false },
    { id: 5, title: "Project Update", description: "Send status report to manager", completed: true },
  ];

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Load tasks from localStorage (if available) else initialTasks
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks);
    } else {
      setTasks(initialTasks);
    }
  }, []);

  // Save tasks to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title, description, completed: false },
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "Completed") return task.completed;
      if (filter === "Pending") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <input
        type="text"
        placeholder="🔍 Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
    </div>
  );
};

export default App;
