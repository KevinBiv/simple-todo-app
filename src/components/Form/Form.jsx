import React, { useState } from "react";

const Form = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-10">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task"
        className="px-2"
      />
      <button type="submit" className="rounded-none">
        Add Task
      </button>
    </form>
  );
};

export default Form;
