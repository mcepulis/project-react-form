/* eslint-disable react/prop-types */


import { Item } from './Item';
import style from './Items.module.css';
import LaptopImage from './img/Laptop.jpg';
import HeadphonesImage from './img/Headphones.jpg';
import MouseImage from './img/Mouse.jpg';


export function ItemList({ items }) {
    return (
        <ul className={style.itemList}>
            {items.map((item, index) => (
                <Item key={index} item={item} image={getImageUrl(item.image)} />
            ))}
        </ul>
    );
}


function getImageUrl(imageName) {
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


