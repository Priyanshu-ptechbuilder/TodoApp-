import React, { useState } from 'react';
import './TodoApp.css';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (index) => {
  const newTasks = [...tasks];
  newTasks[index].completed = !newTasks[index].completed;
  setTasks(newTasks);
};

    const deleteTask = (index) => {
        const newTasks = tasks.filter( (_,i) => i !== index);
        setTasks(newTasks);

    }

  return (
    <div className="todo-box">
      <h2>ToDo List</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="Add a new task"
          value = {input}
          onChange = {(e) => setInput(e.target.value)}
          
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="task-list">
        
        {tasks.map((task, index) => (

          <li key={index} className={task.completed ? 'completed' : ''}>
           
           
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />

            <span>{task.text}</span>
            <button onClick={() => deleteTask(index)}>✖</button>
          </li>
        ))}

      </ul>
    </div>
  );
}
  
