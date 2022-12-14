//该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
//reducer函数 会接到两个参数，分别为:之前的状态(preState),动作对象(action)
import { ADDITEM, CHANGESTATE, DELETEITEM, INITSTATE } from "../constant";
import { initData } from "../../service/initData";

const initState = [
    {
        id: "1",
        content: "xxxxx",
        completed: false,
    },
    {
        id: "2",
        content: "xxxxx",
        completed: true,
    },
    {
        id: "3",
        content: "xxxxx",
        completed: false,
    },
];

function countReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case INITSTATE:
            return [...data];
        case ADDITEM:
            const newData = {
                id: preState.length + 1 + "",
                content: data,
                completed: false,
            };
            return [...preState, newData];
        case CHANGESTATE:
            preState.forEach((item) => {
                if (item.id == data) {
                    item.completed = !item.completed;
                }
            });
            return [...preState];
        case DELETEITEM:
            const newState = preState.filter((item) => {
                return item.id !== data;
            });
            return [...newState];
        default:
            // const requestData = await initData();
            return preState;
    }
}
export default countReducer;
