import style from './List.module.css';
import { VegyItem } from './VegyItem';
import { data } from './VegyArr';

export function List() {

    return (
        <ul className={style.vegetables}>
            {data.map((vegy, index) => <VegyItem key={index} data={vegy} />)}
        </ul>
    );
}