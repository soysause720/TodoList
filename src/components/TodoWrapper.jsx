import { useState } from "react";
import CreateFrom from "./CreateFrom";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    { content: "洗衣服", id: 1, isCompleted: false, isEditing: false },
    { content: "青木陽菜", id: 2, isCompleted: false, isEditing: false },
    { content: "繳水電費", id: 3, isCompleted: false, isEditing: false },
  ]);

  const addTodo = (content) => {
    setTodos([
      ...todos,
      { content, id: Math.random(), isCompleted: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      }),
    );
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      }),
    );
  };

  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEditing: false }
          : todo;
      }),
    );
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      }),
    );
  };

  return (
    <div className="wrapper">
      <h1>代辦事項</h1>
      <CreateFrom addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
            toggleEdit={toggleEdit}
          />
        );
      })}
    </div>
  );
}

export default TodoWrapper;
