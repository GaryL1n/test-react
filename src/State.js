import React, { useState } from 'react';

const State = () => {
    const [count, setCount] = useState(0);

    function makeDown() {
        // setCount(count-1); 不正確的做法 不能一次執行多個變化

        // 可以一次-2
        setCount((prevCount) => prevCount - 1);
        setCount((prevCount) => prevCount - 1);
    }

    function makeUp() {
        setCount((prevCount) => prevCount + 1);
    }

    // 建議能分成多個useState管理就不要用該種useState
    const [state, setState] = useState({ nount: 4, theme: 'blue' });
    const nount = state.nount;
    const theme = state.theme;

    function mkUp() {
        setState((prevState) => {
            // return { nount: prevState.nount + 1 };
            // 用上述方式會把整個原先的useState覆蓋，雇用下述方法把原先useState展開再覆蓋想要覆蓋的值
            return { ...prevState, nount: prevState.nount + 1 };
        });
    }
    function mkDown() {
        setState((prevState) => {
            return { ...prevState, nount: prevState.nount - 1 };
        });
    }

    return (
        <>
            <button onClick={makeDown}>-</button>
            <span>{count}</span>
            <button onClick={makeUp}>+</button>
            <br />
            <button onClick={mkDown}>-</button>
            <span>{nount}</span>
            <span>{theme}</span>
            <button onClick={mkUp}>+</button>
        </>
    );
};

export default State;
