import React from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multi } from '../../Utils/calculate';

const Sunglass = () => {
    const first = 10;   
    const second = 20;
    const sum = add(first, second);
    const mul = multi(first, second);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;