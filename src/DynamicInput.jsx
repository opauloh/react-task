import React from 'react';
import { AddTask, TaskItem } from './components';
import { useTask } from './hooks';

const DynamicInput = () => {
  const {
    tasks,
    addTask,
    removeTask,
    sortTaskDown,
    sortTaskUp,
    textInputRef,
    updateTask
  } = useTask();

  return (
    <div>
      <AddTask onClick={addTask} />
      {tasks.map((task) => (
        <TaskItem key={task.id}>
          <input
            type="text"
            className="row-input"
            ref={(el) => (textInputRef.current[task.id] = el)}
            onChange={(e) => updateTask(task.id, e.target.value)}
            value={task.value}
          />
          <button className="row-up" onClick={() => sortTaskUp(task.id)}>
            ↑
          </button>
          <button className="row-down" onClick={() => sortTaskDown(task.id)}>
            ↓
          </button>
          <button className="row-delete" onClick={() => removeTask(task.id)}>
            x
          </button>
        </TaskItem>
      ))}
    </div>
  );
};

export default DynamicInput;
