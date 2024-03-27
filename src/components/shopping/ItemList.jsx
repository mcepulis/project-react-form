
import PropTypes from 'prop-types'; 
import { Item } from './Item';
import style from './Items.module.css';

export function ItemList({ items }) {
    return (
        <ul className={style.itemList}>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </ul>
    );
}


ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            units: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};