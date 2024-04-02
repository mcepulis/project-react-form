import { useState, useEffect } from 'react';
import { Space } from '../components/space/Space';

export function PageSpace() {
    const [obj, setObj] = useState([]);
    useEffect(() => {
        const spaceData = 'https://raw.githubusercontent.com/mcepulis/project-react-form/master/public/space.json';
        fetch(spaceData)
        .then(rez => rez.json())
        .then(data => {
            console.log(data.SpaceObjects); 
            setObj(data.SpaceObjects);
        })
        .catch(error => console.error(error));
    }, []);

//     let result = "";
// for (let o in obj) {
//    result += obj[o].name;
// }
return (
    <div>
        <Space Objects={obj} />
    </div>
);

}