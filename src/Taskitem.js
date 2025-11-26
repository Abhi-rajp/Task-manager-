import React, { useState } from "react";

function TaskItem({ task, deleteTask, updateTask }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const saveEdit = () => {
    updateTask({ ...task, title, description });
    setEditing(false);
  };

  return (
    <div className="task-card">
      {editing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <span className={`priority ${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>
        </>
      )}

      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => setEditing(!editing)}>Edit</button>
    </div>
  );
}

export default TaskItem;
