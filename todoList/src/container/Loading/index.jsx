import React, { useEffect } from "react";
import { initData } from "../../service/initData";
import "./Loading.less";
const index = ({ changeLoading, initState }) => {
    useEffect(() => {
        initData().then((res) => {
            initState(res);
            changeLoading(false);
        });
        return () => {};
    }, []);
    return <div className="Loading"></div>;
};

export default index;
