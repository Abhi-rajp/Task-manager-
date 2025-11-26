import React, { useEffect, useState } from "react";
import TaskForm from "./Taskform";
import TaskList from "./Tasklist";
import TaskFilter from "./Taskfilter";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterPriority, setFilterPriority] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([{ ...task, id: Date.now(), createdAt: new Date() }, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const updateTask = (updated) => {
    setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));
  };

  return (
    <div className="container">
      <h1 className="title">Task Manager</h1>

      <TaskForm addTask={addTask} />
      <TaskFilter
        setFilterPriority={setFilterPriority}
        setSearchText={setSearchText}
      />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        filterPriority={filterPriority}
        searchText={searchText}
      />
    </div>
  );
}

export default App;
