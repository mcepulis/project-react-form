/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { SpaceObject } from "./SpaceObject";
import style from './Space.module.css';


export function Space({ Objects }) {
    if (!Objects || !Array.isArray(Objects)) {
        return <div className={style.container}>No objects to display</div>;
    }
    return (
        <div className={style.container}>
            {Objects.map((item, index) => (<SpaceObject key={index} Object={item} />)) }
        </div>
    );
}

