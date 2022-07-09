import React, { useState, useEffect, useRef } from 'react';

const Ref = () => {
    const [name, setName] = useState('');
    const prevName = useRef('');

    // 不要這樣使用
    // function focus() {
    //     inputRef.current.value = 'Gary Lin';
    // }

    // prevName.current會是上一次name的值
    useEffect(() => {
        console.log(123);
        prevName.current = name;
    }, [name]);

    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <div>
                My name is {name} and use to be {prevName.current}
            </div>
        </>
    );
};

export default Ref;
