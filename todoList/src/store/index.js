//该文件专门用户暴露store对象，整个应用只有一个store对象

// createStore ,专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from "redux";
//redux-thunk,支持异步action
import thunk from "redux-thunk";

//引入为count组件服务的reducer
import listReducer from "./reducers/list.js";

const allReducer = combineReducers({
    List: listReducer,
});

//暴露store
export default createStore(allReducer, applyMiddleware(thunk));
