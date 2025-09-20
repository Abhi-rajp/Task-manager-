import React from "react";

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="task-filter">
      <button
        className={filter === "All" ? "active" : ""}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      <button
        className={filter === "Completed" ? "active" : ""}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>
      <button
        className={filter === "Pending" ? "active" : ""}
        onClick={() => setFilter("Pending")}
      >
        Pending
      </button>
    </div>
  );
};

export default TaskFilter;
