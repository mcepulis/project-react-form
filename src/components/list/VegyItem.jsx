/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './List.module.css';
import { Link } from 'react-router-dom';

export function VegyItem({ data }) {
    const { title, price, unit } = data;
    const minVegetablesAmount = 0;
    const maxVegetablesAmount = 10;
    const [count, setCount] = useState(1);

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

    function wordToEnglish (word) {
        const ltKEYenDATA= {'ą': 'a', 'č': 'c', 'ę': 'e', 'ė': 'e', 'į': 'i', 'š': 's', 'ų': 'u', 'ū': 'u', 'ž': 'z'};
        let toEnglish = '';
        for (let i = 0; i < word.length; i++) {
            if (ltKEYenDATA[word[i].toLowerCase()]) {
                toEnglish += ltKEYenDATA[word[i].toLowerCase()];
            } else {
                toEnglish += word[i].toLowerCase();
            }
        }
        toEnglish = toEnglish.replace(/[?!]/g, '');
        return toEnglish;
    } 


    return (
        <li className={style.vegy}>
            <span className={style.vegyTitle}>{title} ({price}&euro;/{unit})</span>
            <div className={style.controls}>
                <button onClick={handleCountMinus} className={style.btn}>-</button>
                <span className={style.count}>{count} {unit}</span>
                <button onClick={handleCountPlus} className={style.btn}>+</button>
            </div>
            <Link to={'/vegetables/' + wordToEnglish(title)}>Read more</Link>
        </li>
    );
}