import React from "react";

const TodoList = ({ tasks, onDeleteTask, onToggleCompleted }) => {
  return (
    <ul className="w-1/2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="bg-[#121212] flex justify-between items-center px-4 py-4"
        >
          <div className="flex-1 mr-4">
            <span
              className={`text-lg ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-4">
              Status: {task.completed ? "Completed" : "Pending"}
            </span>
            <div>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="mr-2 px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
              <button
                onClick={() => onToggleCompleted(task.id)}
                className="px-2 py-1 bg-blue-500 text-white rounded"
              >
                {task.completed ? "Mark as Pending" : "Mark as Completed"}
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
