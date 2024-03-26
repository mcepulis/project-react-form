/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './List.module.css';

export function VegyItem({ title, type, price }) {
    const minVegetablesAmount = 0;
    const maxVegetablesAmount = 10;
    const minDiscount = 0;
    const maxDiscount= 100;
    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(0);

    function handleCountMinus() {
        if (count > minVegetablesAmount) {
            setCount(count - 1);
        }
    }

    function handleCountPlus() {
        if (count < maxVegetablesAmount) {
            setCount(count + 1);
        }
    }

    function decreaseDiscount() {
        if (count2 > minDiscount) {
            setCount2(count2 - 5);
        }
    }

    function increaseDiscount() {
        if (count2 < maxDiscount) {
            setCount2(count2 + 5);
        }
    }


    const sum = count * price;
    const discountSum = (price - (price * count2 / 100)) * count;
  

    return (
        <li className={style.vegy}>
            <span className={style.vegyTitle}>{title}</span>
            <div className={style.controls}>
                <button onClick={handleCountMinus} className={style.btn}>-</button>
                <span className={style.count}>{count + type}</span> 
                <button onClick={handleCountPlus} className={style.btn}>+</button>
                <span className={style.sum}>Sum: {sum + 'eu . '}</span> 
                <button onClick={decreaseDiscount} className={style.btn}>-</button>
                <span className={style.discount}>Discount: {count2 + '%' + ' --->'}</span> 
                <button onClick={increaseDiscount} className={style.btn}>+</button>
                <span className={style.sum}>{discountSum + 'eu'} </span> 
            </div>
        </li>
    );
}


