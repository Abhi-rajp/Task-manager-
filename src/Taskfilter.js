import React from "react";

function TaskFilter({ setFilterPriority, setSearchText }) {
  return (
    <div>
      <input
        placeholder="Search by title..."
        onChange={(e) => setSearchText(e.target.value)}
      />

      <select onChange={(e) => setFilterPriority(e.target.value)}>
        <option value="">All Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
}

export default TaskFilter;
