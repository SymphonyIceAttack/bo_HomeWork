import React from "react";
import "./item.less";

const index = ({ item, changeState, deleteItem }) => {
    return (
        <li className="Item">
            <input
                type="checkbox"
                id={item.id}
                checked={item.completed}
                onChange={() => {
                    changeState(item.id);
                }}
            />
            <label htmlFor={item.id}></label>
            <span
                style={{
                    textDecoration: item.completed ? "line-through" : "",
                    color: item.completed ? "black" : "",
                }}
            >
                {item.content}
            </span>
            <button
                onClick={() => {
                    deleteItem(item.id);
                }}
            >
                删除
            </button>
        </li>
    );
};

export default index;
