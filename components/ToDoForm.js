import { useContext, useRef, useState } from "react";
import { ToDoContext } from "./Provider/ToDoProvider";

function ToDoForm() {
  const [text, setText] = useState("");
  const inpText = useRef();
  const { AddTaskHandler } = useContext(ToDoContext);

  const click = (e) => {
    e.preventDefault();
    const input_text = document.getElementById("text");

    if (text) {
      AddTaskHandler(text);
      // const input_text = document.getElementById("text");

      input_text.classList.remove("error");
    } else {
      // const input_text = document.getElementById("text");
      input_text.classList.add("error");
    }
    setText("");
    console.log(text);
    inpText.current.focus();
  };
  return (
    <div>
      <h1>To Do List</h1>
      <div className="input">
        <input
          type="text"
          name="todo"
          value={text}
          ref={inpText}
          id="text"
          onChange={(e) => setText(e.target.value)}
          // id="todo"
          placeholder="Enter your daily Plans!"
        />

        <button type="submit" onClick={click}>
          Add
        </button>
      </div>
    </div>
  );
}
export default ToDoForm;
