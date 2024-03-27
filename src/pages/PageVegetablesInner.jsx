import { useParams } from 'react-router-dom';
import { data } from '../components/list/VegyArr';

export function PageVegetablesInner() {
    const dataParams = useParams();
   
    for (let i = 0; i < data.length; i++) {
        if (dataParams.id === data[i].href) {
            return (
                <>
                    <h1>Apie produkta: {dataParams.id}</h1>
                    <p>Dominancio produkto pavadinimas yra: {data[i].title}</p>
                    <p>Dominancio produkto kaina yra {data[i].price + 'eu'} uz {data[i].unit} </p>
                </>
            );
            }
        }
    }
