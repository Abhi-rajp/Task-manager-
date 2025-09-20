import React from "react";

const TaskItem = ({ task, toggleTask }) => {
  return (
    <div
      className={`task-item ${task.completed ? "completed" : ""}`}
      onClick={() => toggleTask(task.id)}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskItem;
