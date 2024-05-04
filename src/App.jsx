import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleCompleted = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-[#242424] text-white min-h-screen">
      <h1 className="text-6xl text-center mb-8">To-Do List</h1>
      <div className="flex flex-col justify-center items-center">
        <Form onAddTask={handleAddTask} />
        <List
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onToggleCompleted={handleToggleCompleted}
        />
      </div>
    </div>
  );
}

export default App;
