import React, { useState, useEffect } from 'react';
import { ItemList } from '../components/shopping/ItemList';

export function PageShopping() {
    const [items, setItems] = useState([]); // Rename 'item' to 'items' to represent multiple items

    const itemsData = 'https://raw.githubusercontent.com/mcepulis/project-react-form/master/public/shopping.json';

    useEffect(() => {
        fetch(itemsData)
            .then(res => res.json())
            .then(data => setItems(data)) // Update state with fetched data
            .catch(error => console.error(error));
    }, []);

    return <ItemList items={items} />; // Pass 'items' state as a prop to ItemList
}
