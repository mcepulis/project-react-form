import { useState, useEffect } from 'react';
import { Item } from './Item';
import style from './Items.module.css';

export function ItemList({ items }) {
    return (
        <ul className={style.itemList}>
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    );
}