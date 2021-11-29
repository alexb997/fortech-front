import {useEffect , useState} from 'react';
import { useParams } from 'react-router';
import CarContainer from './CarContainer';

function UpdateCar(){
    const { id } = useParams()
    const [isLoading,setIsLoading] = useState(true);
    const [car,setCar] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/api/cars/"+ id)
        .then( response => response.json())
        .then((data) => {
        setIsLoading(false);
        setCar(data);
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h3>Car before update</h3>
            {isLoading && <p>Loading...</p>}
            <CarContainer car={car}/>
            <hr/>
            <h3>Input form</h3>
            <form>
                <label>
                    Label:
                    <input type="text" name="label" />
                </label>
                <label>
                    Manufacturer:
                    <input type="text" name="manufacturer" />
                </label>
                <label>
                    Assured:
                    <input type="text" name="assured" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h3>Button of submit</h3>
        </div>
    );
}
export default UpdateCar;