import React from "react";
import "./ListItems.css";

function ListItems(props) {
  const items = props.items;
  let all = props.items.filter(item => !item.done);

  const listItems = items.map(item => {
    let todoClass = item.done ? "done" : "undone";

    console.log(item.done, todoClass);
    return (
      <div>
        <div className="list" key={item.key}>
          <p>
            
              <input
                type="checkbox"
                id={item.key}
                onChange={e => {
                  props.markToDoDone(e.target.value, item.key);
                }}
              />
            
              <div className={todoClass}>
                <div className="text">
                <input
                  type="text"
                  id={item.key}
                  value={item.text}
                  onChange={e => {
                    props.setUpdate(e.target.value, item.key);
                  }}
                />
                </div>
              </div>

              <button
                type="click"
                className="delete-button"
                onClick={() => {
                  props.deleteItem(item.key);
                }}
              >
                &times;
              </button>
    
          </p>
        </div>
      </div>
    );
  });
  return (
    <fragment>
      {" "}
      <div>{listItems}</div>
      <div className="taskcounter">{all.length} task Remaining</div>
    </fragment>
  );
}

export default ListItems;
