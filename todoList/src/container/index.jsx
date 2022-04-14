import React, { useState } from "react";
import "./container.less";
import Header from "./header";
import List from "./List";
import AddItem from "./AddItem";
import WellAddItem from "./WellAddItem";
import Loading from "./Loading";
import {
    initStateAction,
    createChangeStateAction,
    deleteItemAction,
    createAddItemAction,
} from "../store/actions/list";

import { changeLoading } from "../store/actions/loading";

import { connect } from "react-redux";

const index = ({
    isLoading,
    changeLoading,
    TodoList,
    initState,
    changeState,
    deleteItem,
    addItem,
}) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <div
            className="container"
            style={{
                background: isLoading ? "black" : "",
                height: isLoading ? "100vh" : "100%",
                width: isLoading ? "100vw" : "80%",
                marginTop: isLoading ? "0" : "1rem",
            }}
        >
            {isLoading ? (
                <Loading changeLoading={changeLoading} initState={initState} />
            ) : (
                <div className="containerInner">
                    <Header />
                    <List
                        TodoList={TodoList}
                        changeState={changeState}
                        deleteItem={deleteItem}
                    />
                    {isShow ? (
                        <AddItem addItem={addItem} setIsShow={setIsShow} />
                    ) : (
                        <WellAddItem setIsShow={setIsShow} />
                    )}
                </div>
            )}
        </div>
    );
};
const CounterContainer = connect(
    //传递的是状态
    (state) => ({ TodoList: state.List, isLoading: state.Loading }),
    //操作状态的方法
    (dispatch) => ({
        initState: (data) => {
            dispatch(initStateAction(data));
        },
        changeState: (id) => {
            dispatch(createChangeStateAction(id));
        },
        deleteItem: (id) => {
            dispatch(deleteItemAction(id));
        },
        addItem: (data) => {
            dispatch(createAddItemAction(data));
        },
        changeLoading: (data) => {
            dispatch(changeLoading(data));
        },
    })
)(index);
export default CounterContainer;
