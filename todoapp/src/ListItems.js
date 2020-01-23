import React from "react";
import "./ListItems.css";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map(item => {
    let todoClass = item.done ? "done" : "undone";
    // console.log(item.done, todoClass);
    return (
      <div className="list" key={item.key}>
        <div className={todoClass}>
          <input
            type="checkbox"
            id={item.key}
            value={item.text}
            onChange={e => {
              props.markToDoDone(e.target.value, item.key);
            }}
          />
          <p>
            <input
              type="text"
              id={item.key}
              value={item.text}
              onChange={e => {
                props.setUpdate(e.target.value, item.key);
              }}
            />
            <span>
              <button
                type="click"
                className="delete-button"
                onClick={() => {
                  props.deleteItem(item.key);
                }}
              >
                &times;
              </button>
            </span>
          </p>
        </div>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListItems;
