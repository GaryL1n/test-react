import React, { useState, useMemo, useEffect } from 'react';

export default function Memo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // useMemo 值改變時才運行這行程式碼以節省效能跟加快速度
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    },[number]);

    // 如果值跟上次相同就不運行
    const themeStyles = useMemo(()=>{
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black',
        }
    },[dark]);

    useEffect(()=>{
        console.log('Theme Changed');
    },[themeStyles])

    return (
        <>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Change Theme
            </button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    );
}

function slowFunction(num) {
    console.log('Calling Slow Function');
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
}
