import React from "react";
import Card from './Card';
import { Delete } from "@material-ui/icons";
import { Done, DoneAll } from "@material-ui/icons";

function Concluded(props) {
  if (props.done) {
    return <DoneAll fontSize="small" color="primary" />;
  } else {
    return <Done fontSize="small" color="primary" />;
  }
}

function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
            <Card className={item.done ? "done item" : "item"}>
          {item.text}
          <div>
            <button
              onClick={() => {
                props.onDone(item);
              }}
            >
              <Concluded done={item.done}></Concluded>
            </button>

            <button
              onClick={() => {
                props.onItemDeleted(item);
              }}
            >
              <Delete fontSize="small" color="secondary" />
            </button>
          </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default List;
