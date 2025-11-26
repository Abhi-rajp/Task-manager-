import React from "react";
import TaskItem from "./Taskitem";

function TaskList({ tasks, deleteTask, updateTask, filterPriority, searchText }) {
  const filtered = tasks
    .filter((t) =>
      filterPriority ? t.priority === filterPriority : true
    )
    .filter((t) =>
      t.title.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <div>
      {filtered.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
