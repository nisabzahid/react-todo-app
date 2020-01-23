import React from "react";
import "./App.css";
import ListItems from "./ListItems";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
        done: false
      }
    };
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.markToDoDone = this.markToDoDone.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
          done: false
        }
      });
    }
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }
  setUpdate(text, key) {
    //console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        // console.log(item.key + "    " + key);
        item.text = text; 
      }
    
    });

    this.setState({
      items: items
    });
  
  }
  markToDoDone(text, key) {
    //console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        // console.log(item.key + "    " + key);
        item.done = !item.done;
      }
    });

    this.setState({
      items: items
    });
    // items.map(item=>console.log(item.text,item.done));
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="What needs to be done?"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
          </form>
          <p>{this.state.items.text}</p>

          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
            markToDoDone={this.markToDoDone}
          />
        </header>
      </div>
    );
  }
}

export default App;
