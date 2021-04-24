import { useEffect, useReducer, useRef, useState } from 'react';

const actionTypes = {
  addTask: 'addTask',
  sortUp: 'sortUp',
  sortDown: 'sortDown',
  remove: 'remove',
  edit: 'edit'
};

const initialState = {
  tasks: []
};

const taskReducer = (state, { type }) => {
  switch (type) {
    default: {
      throw new Error(`Unsupported type: ${type}`);
    }
  }
};

const generateTask = () => ({
  id: Math.random().toString(36).substr(2, 9),
  value: ''
});

export const useTask = () => {
  // const [{ task }, dispatch] = useReducer(taskReducer, initialState);
  const [tasks, setTasks] = useState([]);
  const textInputRef = useRef({});
  const lastInputFocus = useRef(null);

  useEffect(() => {
    // tasks.forEach((task) => {
    //   textInputRef.current[task.id].focus;
    // });
    // if (tasks.length > 0) textInputRef.current[tasks[0].id].focus();
    if (lastInputFocus.current) textInputRef.current[lastInputFocus.current].focus();

    // tasks[0]
  }, [tasks]);
  const addTask = () => {
    const task = generateTask();
    setTasks((tasks) => [...tasks, task]);
    lastInputFocus.current = task.id;
  };

  const removeTask = (id) => {
    const taskIdx = tasks.findIndex((task) => task.id === id);
    const taskLastIdx = tasks.length - 1;
    if (taskIdx < taskLastIdx) {
      lastInputFocus.current = tasks.find((_, idx) => idx === taskIdx + 1).id;
    } else if (taskLastIdx > 0) {
      lastInputFocus.current = tasks.find((_, idx) => idx === taskIdx - 1).id;
    } else {
      lastInputFocus.current = null;
    }
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };
  const sortTaskDown = (id) => {
    setTasks((tasks) => {
      const taskIdx = tasks.findIndex((task) => task.id === id);
      const taskLastIdx = tasks.length - 1;
      const taskTargetIdx = taskIdx + 1;
      if (taskIdx < taskLastIdx) {
        return tasks.map((task, idx) => {
          if (idx === taskIdx) {
            return tasks[taskTargetIdx];
          } else if (idx === taskTargetIdx) {
            return tasks[taskIdx];
          }
          return task;
        });
      }
      return tasks;
    });
    lastInputFocus.current = id;
  };
  const sortTaskUp = (id) => {
    setTasks((tasks) => {
      const taskIdx = tasks.findIndex((task) => task.id === id);
      const taskTargetIdx = taskIdx - 1;
      if (taskIdx > 0) {
        return tasks.map((task, idx) => {
          if (idx === taskIdx) {
            return tasks[taskTargetIdx];
          } else if (idx === taskTargetIdx) {
            return tasks[taskIdx];
          }
          return task;
        });
      }
      return tasks;
    });
    lastInputFocus.current = null;
    textInputRef.current[id].focus();
  };

  const updateTask = (id, value) => {
    lastInputFocus.current = null;
    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) {
          task.value = value;
        }
        return task;
      });
    });
  };

  return {
    tasks,
    addTask,
    removeTask,
    sortTaskDown,
    sortTaskUp,
    textInputRef,
    updateTask
  };
};
