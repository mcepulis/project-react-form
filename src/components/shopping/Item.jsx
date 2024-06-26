/* eslint-disable react/prop-types */
import style from './Items.module.css';


export function Item({ item, image }) {
    return (
        <div className={style.item}>
            <div className={style.itemImage}>
                <img className={style.image} src={image} alt={item.name} />
            </div>
            <div className={style.itemInfo}>
                <div className={style.itemName}>
                    <h3>{'Name: ' + item.name}</h3>
                </div>
                <div className={style.itemPrice}>
                    <h3>{'Price: ' + item.price}</h3>
                </div>
                <div className={style.itemUnits}>
                    <h3>{'Unit: ' + item.units}</h3>
                </div>
            </div>
        </div>
    );
}

