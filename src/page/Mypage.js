import './Mypage.css';
import { useState } from 'react';
import ColorSelector from './ColorSelector';

function Mypage() {
    // 變數名稱demoBG 修改它的函式(React管理)setDemo
    const [demoBG, setDemoBG] = useState('blue');
    const [colorArray, setColorArray] = useState([
        'salmon',
        'lightblue',
        'red',
    ]);

    function handleClick(e) {
        console.log(e.target.style.backgroundColor);
        setDemoBG(e.target.style.backgroundColor);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div
                        className="color-demo-area"
                        style={{ backgroundColor: demoBG }}
                    ></div>
                </div>
                <div className="col-6">
                    <div className="color-selector-area d-flex flex-wrap">
                        {colorArray.map((color) => {
                            return (
                                <ColorSelector
                                    key={color}
                                    bgColor={color}
                                    handleClick={handleClick}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mypage;
