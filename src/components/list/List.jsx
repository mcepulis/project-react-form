import style from './List.module.css';
import { VegyItem } from './VegyItem';

export function List() {
    const data = [
        {name: 'Bulves', type: 'kg', price: 5},
        {name: 'Morkos', type: 'kg', price: 100},
        {name: 'Svogunai', type: 'kg', price: 15},
        {name: 'Kopustas', type: 'kg', price: 20},
        {name: 'Pomidoras', type: 'kg', price: 25},
        {name: 'Agurkas', type: 'kg', price: 30},
    ]

    return (
        <ul className={style.vegetables}>
            {data.map((vegy, index) => (
                <VegyItem key={index} title={vegy.name} type={vegy.type} price={vegy.price}
                />
            ))}
        </ul>
    );
}