import { useState } from "react";

const Workoutlist = () => {
  const [items, setItems] = useState([
    { id: 1, text: "ARMS - Bicep Curls", done: false },
    { id: 2, text: "Chest Workout", done: false },
    { id: 3, text: "Shoulders Workout", done: false },
    { id: 4, text: "Push-Ups", done: false },
    { id: 4, text: "100 jumping-jack ", done: false },
  ]);

  const addItem = () => {
  const newItem = {
    id: Date.now(),  // this was probably set to a fixed number like 4
    text: "Bonus Workout",
    done: false,
  };
  setItems([...items, newItem]);
};

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleDone = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, done: !item.done }
          : item
      )
    );
  };

  return (
  <div className="card">  {/* ADD THIS */}
    <h2 className="card-title">Workout List</h2>  {/* ADD THIS */}
    <ul className="workout-list">  {/* ADD THIS */}
      {items.map((item) => (
        <li key={item.id} className="workout-item">  {/* ADD THIS */}
          <span className={`workout-label ${item.done ? "done" : ""}`}>  {/* ADD THIS */}
            {item.text}
          </span>
          <div className="workout-actions">  {/* ADD THIS */}
            <button className="btn btn-success" onClick={() => toggleDone(item.id)}>
              {item.done ? "Undo" : "Done"}
            </button>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
    <div className="add-workout-row">  {/* ADD THIS */}
      <button className="btn btn-primary" onClick={addItem}>+ Add Workout</button>  {/* ADD THIS */}
    </div>
  </div>
);

  };

export default Workoutlist;





























