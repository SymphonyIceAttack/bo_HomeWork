import React from "react";
import "./WellAddItem.less";
const index = ({ setIsShow }) => {
    return (
        <div className="WellAddItem">
            <button
                onClick={() => {
                    setIsShow(true);
                }}
            >
                显示添加
            </button>
        </div>
    );
};

export default index;
