import style from './Items.module.css';

export function Item({ item }) {
    return (
        <div className={style.item}>
            <div className={style.itemImage}>
                <img className={style.image} src={item.image} alt={item.name} />
            </div>
            <div className={style.itemInfo}>
                <div className={style.itemName}>
                    <h3>{item.name}</h3>
                </div>
                <div className={style.itemPrice}>
                    <h3>{item.price}</h3>
                </div>
                <div className={style.itemUnits}>
                    <h3>{item.units}</h3>
                </div>
            </div>
        </div>
    );
}
