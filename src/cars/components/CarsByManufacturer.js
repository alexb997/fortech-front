import {useEffect , useState} from 'react';
import { useParams } from 'react-router';
import CarContainer from './CarContainer';

function CarsByManufacturer(){
    const { manufacturer } = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [carsList,setCarsList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/cars?manufacturer=" + manufacturer)
        .then(response => response.json())
        .then((data) => {
        setIsLoading(false);
        setCarsList(data);
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h3>Api call to backend</h3>
            {isLoading && <p>Loading...</p>}
            {carsList.map((c,index) => (
            <CarContainer key={index} car={c}/>
            ))}
        </div>
    );
}


export default CarsByManufacturer;
