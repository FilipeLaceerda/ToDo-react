import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      //setItems([...items, text]);
      props.onAddItem(text);
      setText("");
    }
  }

  return (
    <form>
      <input onChange={handleChange} type="text" value={text}></input>
      <Button size="small" color='primary' variant="contained" onClick={addItem}>
        Adicionar
      </Button>
    </form>
  );
}

export default TodoForm;
