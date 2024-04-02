/* eslint-disable react/prop-types */
import style from './Space.module.css';
import mars from './img/mars.jpg';


export function SpaceObject({ Object }) {
    return (
        <div className={style.containerObj}>
            <div className={style.leftSide}>
                <h1 className={style.name}><span className={style.key}>name: </span>{Object.name}</h1>
                <h2 className={style.type}><span className={style.key}>type: </span>Planet</h2>
                <h3 className={style.diameter}><span className={style.key}>diameter[km]: </span>6779</h3>
                <h4 className={style.distance}><span className={style.key}>distance[km]: </span>225000000</h4>
            </div>
            <div className={style.rightSide}>
                <img className={style.image} src={mars} alt="" />
            </div>
        </div>
    )
}