
import PropTypes from 'prop-types'; 
import { Item } from './Item';
import style from './Items.module.css';
import LaptopImage from './img/Laptop.jpg';
import HeadphonesImage from './img/Headphones.jpg';
import MouseImage from './img/Mouse.jpg';

export function ItemList({ items }) {
    return (
        <ul className={style.itemList}>
            {items.map((item, index) => (
                <Item key={index} item={item} image={getImage(item.image)} />
            ))}
        </ul>
    );
}


function getImage(imageName) {
    switch (imageName) {
        case 'Laptop.jpg':
            return LaptopImage;
        case 'Headphones.jpg':
            return HeadphonesImage;
        case 'Mouse.jpg':
            return MouseImage;
        default:
            return null;
    }
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