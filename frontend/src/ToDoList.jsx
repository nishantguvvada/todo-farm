import "./ToDoList.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { BiSolidTrash, BiPen, BiCheckCircle } from "react-icons/bi";

function ToDoList({ listId, handleBackButton }) {
  let labelRef = useRef();
  const [listData, setListData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3001/api/lists/${listId}`);
      const newData = await response.data;
      setListData(newData);
    };
    fetchData();
  }, [listId]);

  function handleCreateItem(label) {
    const updateData = async () => {
      const response = await axios.post(`http://localhost:3001/api/lists/${listData.id}/items/`, {
        label: label,
      });
      setListData(await response.data);
    };
    updateData();
  }

  function handleDeleteItem(id) {
    const updateData = async () => {
      const response = await axios.delete(
        `http://localhost:3001/api/lists/${listData.id}/items/${id}`
      );
      setListData(await response.data);
    };
    updateData();
  }

  function handleCheckToggle(itemId, newState) {
    const updateData = async () => {
      const response = await axios.patch(
        `http://localhost:3001/api/lists/${listData.id}/checked_state`,
        {
          item_id: itemId,
          checked_state: newState,
        }
      );
      setListData(await response.data);
    };
    updateData();
  }

  if (listData === null) {
    return (
      <div className="ToDoList loading">
        <button className="back" onClick={handleBackButton}>
          Back
        </button>
        Loading to-do list ...
      </div>
    );
  }
  return (
    <div className="ToDoList">
      <button className="back" onClick={handleBackButton}>
        Back
      </button>
      <h1>List: {listData.name}</h1>
      <div className="box">
        <label>
          New Item:&nbsp;
          <input ref={labelRef} type="text" />
        </label>
        <button
          onClick={() =>
            handleCreateItem(labelRef.current.value)
          }
        >
          New
        </button>
      </div>
      {listData.items.length > 0 ? (
        listData.items.map((item) => {
          return (
            <div
              key={item.id}
              className={item.checked ? "item checked" : "item"}
              onClick={() => handleCheckToggle(item.id, !item.checked)}
            >
              <span>{item.checked ? "✅" : "⬜️"} </span>
              <span className="label">{item.label} </span>
              <span className="flex"></span>
              <span className="check">
                <BiCheckCircle/>
              </span>
              <span className="pen">
                <BiPen/>
              </span>
              <span
                className="trash"
                onClick={(evt) => {
                  evt.stopPropagation();
                  handleDeleteItem(item.id);
                }}
              >
                <BiSolidTrash />
              </span>
            </div>
          );
        })
      ) : (
        <div className="box">There are currently no items.</div>
      )}
    </div>
  );
}

export default ToDoList;