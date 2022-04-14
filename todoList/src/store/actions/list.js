//该文件专门为Count组件生成action对象
import { CHANGESTATE, ADDITEM, DELETEITEM, INITSTATE } from "../constant";

export const initStateAction = (data) => ({ type: INITSTATE, data });
export const createAddItemAction = (data) => ({ type: ADDITEM, data });
export const createChangeStateAction = (data) => ({ type: CHANGESTATE, data });

export const deleteItemAction = (data) => ({ type: DELETEITEM, data });
