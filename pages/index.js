// import ToDoProvider from "../components/Provider/ToDoProvider";
// import ToDoForm from "../components/ToDoForm";
// import ToDoList from "../components/ToDoList";

import ToDoProvider from "@/components/Provider/ToDoProvider";
import ToDoForm from "@/components/ToDoForm";
import ToDoList from "@/components/ToDoList";

function Homes() {
  return (
    <>
      <ToDoProvider>
        <div className="container">
          <ToDoForm />
          <ToDoList />
        </div>
      </ToDoProvider>
    </>
  );
}
export default Homes;
