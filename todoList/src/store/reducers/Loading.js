import { CHANGELOADING } from "../constant";

const initLoading = true;

export default function LoadingReducer(preLoading = initLoading, action) {
    const { type, data } = action;
    switch (type) {
        case CHANGELOADING:
            return !preLoading;
        default:
            return preLoading;
    }
}
