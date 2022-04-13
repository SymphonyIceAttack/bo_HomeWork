import React, { useState } from "react";
import Item from "./item";
import "./list.less";
const index = ({ TodoList, changeState, deleteItem }) => {
    return (
        <ul>
            {TodoList.map((item) => {
                return (
                    <Item
                        key={item.id}
                        item={item}
                        changeState={changeState}
                        deleteItem={deleteItem}
                    />
                );
            })}
        </ul>
    );
};

export default index;
