import { useContext } from "react";
import { ToDoContext } from "./Provider/ToDoProvider";
import ToDo from "./ToDo";
// import ToDo from "./ToDo";
// import ToDo from "@/components/ToDoList";

const ToDoList = () => {
  const { task } = useContext(ToDoContext);
  console.log(task);
  return (
    <div className="todo">
      <label>
        <input type="checkbox" name="filter" id="filter" />
        Show Only Not Complete Task
      </label>
      <ul>
        {task.map((task) => (
          <ToDo key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
