import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todo_next"));
    if (data) {
      setTask(data);
    }
  }, []);

  const StorageToDoListLs = (taskLS) => {
    localStorage.setItem("todo_next", JSON.stringify(taskLS));
  };

  const AddTaskHandler = (text) => {
    const newTask = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTask([...task, newTask]);
    StorageToDoListLs([...task, newTask]);
  };

  const DeleteTaskHandler = (id) => {
    const deletedTask = task.filter((task) => task.id !== id);
    setTask(deletedTask);
    StorageToDoListLs(deletedTask);
  };

  const EditTaskHandler = (editTask) => {
    const updateTask = task.map((task) => {
      if (task.id === editTask.id) {
        task.text = editTask.text;
      }
      return task;
    });
    setTask(updateTask);
    StorageToDoListLs(updateTask);
  };
  return (
    <ToDoContext.Provider
      value={{ task, AddTaskHandler, DeleteTaskHandler, EditTaskHandler }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
