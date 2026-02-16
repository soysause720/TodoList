import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import EditFrom from "./EditFrom";

function Todo({ todo, deleteTodo, toggleComplete, editTodo, toggleEdit }) {
  return todo.isEditing ? (
    <EditFrom todo={todo} editTodo={editTodo} />
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleComplete(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <MdEdit
          onClick={() => {
            toggleEdit(todo.id);
          }}
          style={{ cursor: "pointer" }}
        />
        <MdDelete
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default Todo;
