
import React, { useState } from 'react';
import ToDoLists from "./ToDoLists";



const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]) /*mappping method*/

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const addItemToTask = (e) => {
    e.preventDefault()
    setItems(preItem => [...preItem, inputList])
    setInputList("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <form onSubmit={addItemToTask}>
            <input type="text" placeholder="Add new Item"
              value={inputList}
              required
              onChange={itemEvent} />
            <button type={'submit'}> + </button>
          </form>

          <ol>
            {items?.map((itemVal, i) => {
              return <ToDoLists key={i} text={itemVal} />;
            })}
          </ol>
        </div>
      </div>


    </>
  )
}
export default App;
