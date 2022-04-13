import React, { useRef } from "react";
import "./addItem.less";

const index = ({ addItem }) => {
    const input1 = useRef(null);
    return (
        <div className="addItem">
            <input ref={input1} type="text" placeholder="请输入添加的内容" />
            <div>
                <button
                    onClick={() => {
                        addItem(input1.current.value);
                        input1.current.value = "";
                    }}
                >
                    添加
                </button>
            </div>
        </div>
    );
};

export default index;
