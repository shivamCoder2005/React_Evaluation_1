import { useEffect, useState } from "react";

const Tags = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  function removeTags(name: string) {
    setError("");
    setTags((prev) => prev.filter((tag) => tag !== name));
  }

  function handleAdd(e: React.KeyboardEvent) {
    if (e.key == " " && input.trim()) {
      if (tags.length > 10) {
        setDisabled(true);
        setError("maximum 10 tags are allowed");
        return;
      }
      if (tags.includes(input.toLowerCase())) {
        setError("tag already exist");
        setInput("");
        return;
      }
      setTags((prev) => [...prev, input.trim()]);
      setInput("");
    }
  }

  return (
    <>
      Tags
      <label htmlFor="input">Enter Tags :- </label>
      <input
        type="text"
        id="input"
        value={input}
        onKeyDown={handleAdd}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
      />
      {tags &&
        tags.map((tag) => (
          <div key={tag} style={{ display: "flex", flexDirection: "row" }}>
            {tag} <button onClick={() => removeTags(tag)}>X</button>
          </div>
        ))}
      {error && <p>{error}</p>}
    </>
  );
};

export default Tags;
