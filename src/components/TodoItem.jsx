import React from "react";
import "./TodoItem.css";

const TodoItem = ({ text, dueDate, onDelete }) => {
  const formattedDueDate = dueDate
    ? new Date(dueDate).toLocaleString()
    : "No due date";

  return (
    <div className="todo-item">
      <input type="checkbox" />
      <div className="todo-text">{text}</div>
      <div className="due-date">
        <span className="due-date-dis">Due Date:</span> {formattedDueDate}
      </div>
      {/* <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => onUpdateDueDate(e.target.value)}
      /> */}
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
