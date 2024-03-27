import { useState, useEffect } from 'react';
import { ItemList } from '../components/shopping/ItemList'; // Assuming ItemList component is in the same directory
import style from '../components/shopping/Items.module.css';

export function PageShopping() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemsDataUrl = 'https://raw.githubusercontent.com/mcepulis/project-react-form/master/public/shopping.json';

        fetch(itemsDataUrl)
            .then(res => res.json())
            .then(data => setItems(data.shoppingBag))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className={style.pageShopping}>
            <h2>Shopping Items</h2>
            <ItemList items={items} />
        </div>
    );
}