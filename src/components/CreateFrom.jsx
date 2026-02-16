import { useState } from "react";

function CreateFrom({ addTodo }) {
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(content);
    setContent("");
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="請輸入代辦事項"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">新增</button>
    </form>
  );
}

export default CreateFrom;
