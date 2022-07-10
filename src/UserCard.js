import React, { useState, useEffect } from 'react';

const UserCard = () => {
    const [input, setInput] = useState('');

    function click() {

    }
    return (
        <>
            <div className="d-flex justify-content-around mt-5">
                <div className="col-2 bg-dark pt-4">
                    <div className="w-100">
                        <div className="d-flex justify-content-center mb-3">
                            <img
                                src="https://cdn.bella.tw/index_image/eyJG54eluJpqU0Vnkb4p3TP0g0GtfwMZgesBC5V3.jpeg"
                                alt=""
                                className="w-75"
                            />
                        </div>
                        <p className="text-center">新垣結衣</p>
                    </div>
                    <div className="d-flex justify-content-around mb-3">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={click}
                        >
                            Go
                        </button>
                    </div>
                </div>
                <div className="col-2 bg-dark"></div>
            </div>
        </>
    );
};

export default UserCard;
