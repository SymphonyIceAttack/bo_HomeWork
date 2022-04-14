import { useState, useEffect } from "react";
import { initData } from "../service/initData";
export const useInitState = (isLoading, initState, changeLoading) => {
    useEffect(() => {
        if (isLoading) {
            initData().then((res) => {
                initState(res);
                changeLoading(false);
            });
        }
    }, []);
};
