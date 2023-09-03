import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function TodoList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { text: newItem, dueDate }]);
      setNewItem("");
      setDueDate("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="todo-list-container">
      <div className="navbar">
        <span className="todo-list-title">To-Do List</span>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="New to-do item"
        />
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          placeholder="Due date and time"
        />
        <button onClick={addItem}>Add</button>
      </div>
      {items.length === 0 ? (
        <div className="nothing-to-do"> Nothing to do</div>
      ) : (
        items.map((item, index) => (
          <div className="todo-item">
            <TodoItem
              key={index}
              text={item.text}
              dueDate={item.dueDate}
              onDelete={() => deleteItem(index)}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default TodoList;
