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

function ListItem(props) {
  return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
          {props.item.text}
          <div>
            <button
              onClick={() => {
                props.onDone(props.item);
              }}
            >
              <Concluded done={props.item.done}></Concluded>
            </button>

            <button
              onClick={() => {
                props.onItemDeleted(props.item);
              }}
            >
              <Delete fontSize="small" color="secondary" />
            </button>
          </div>
          </Card>
        </li>
  );
}

export default ListItem;