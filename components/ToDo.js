import { useContext, useRef, useState } from "react";
import { ToDoContext } from "./Provider/ToDoProvider";

function ToDo({ task }) {
  console.log(task);
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(task.text);
  const inpEdit = useRef();
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const { DeleteTaskHandler, EditTaskHandler } = useContext(ToDoContext);

  const ClickEditButton = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
    if (text === "") {
      alert("Please Enter your Daily Plan!");
      setText(task.text);
    } else {
      task.text = text;
      EditTaskHandler(task);
    }
  };
  const DeleteHandler = (id) => {
    if (id) {
      DeleteTaskHandler(id);
    }
  };
  const TaskCompleted = () => {
    setIsCompleted(!isCompleted);
    task.completed = !isCompleted;
  };

  return (
    <div className="list">
      <li className="list-part">
        <div>
          <input
            value={isCompleted}
            type="checkbox"
            name={task.id}
            id={task.id}
            onChange={TaskCompleted}
            checked={task.completed}
          />
          {isEdit ? (
            <input
              type="text"
              value={text}
              className="auto-input"
              onChange={(e) => setText(e.target.value)}
              ref={inpEdit}
              autoFocus
            />
          ) : task.completed ? (
            <del>{text}</del>
          ) : (
            text
          )}
        </div>
        <div>
          <button onClick={ClickEditButton}>Edit</button>
          <button onClick={(e) => DeleteHandler(task.id)}>Delete</button>
        </div>
      </li>
    </div>
  );
}
export default ToDo;
