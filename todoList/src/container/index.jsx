import React from "react";
import "./container.less";
import Header from "./header";
import List from "./List";
import AddItem from "./AddItem";
import {
    createChangeStateAction,
    deleteItemAction,
    createAddItemAction,
} from "../store/actions/list";

import { connect } from "react-redux";
const index = ({ TodoList, changeState, deleteItem, addItem }) => {
    return (
        <div className="container">
            <Header />
            <List
                TodoList={TodoList}
                changeState={changeState}
                deleteItem={deleteItem}
            />
            <AddItem addItem={addItem} />
        </div>
    );
};
const CounterContainer = connect(
    //传递的是状态
    (state) => ({ TodoList: state.List }),
    //操作状态的方法
    (dispatch) => ({
        changeState: (id) => {
            dispatch(createChangeStateAction(id));
        },
        deleteItem: (id) => {
            dispatch(deleteItemAction(id));
        },
        addItem: (data) => {
            dispatch(createAddItemAction(data));
        },
    })
)(index);
export default CounterContainer;
