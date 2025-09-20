import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
        ))
      )}
    </div>
  );
};

export default TaskList;
