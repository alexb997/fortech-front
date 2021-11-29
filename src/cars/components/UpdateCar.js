import {useEffect , useState} from 'react';
import { useParams } from 'react-router';
import CarContainer from './CarContainer';

function UpdateCar(){
    const { id } = useParams()
    const [isLoading,setIsLoading] = useState(true);
    const [car,setCar] = useState({});
    const [plate, setPlate] = useState();
    const [manufacturer, setManufacturer] = useState();
    const [assured, setAssured] = useState();
    

    useEffect(() => {
        fetch("http://localhost:8080/api/cars/"+ id)
        .then( response => response.json())
        .then((data) => {
        setIsLoading(false);
        setCar(data);
        })
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id:car.id,
                plate:plate,
                manufacturer:manufacturer,
                assured:assured })
        };
        fetch('http://localhost:8080/api/cars/'+id, requestOptions)
            .then(response => response.json())
            .then(data => setCar(data));
    };

    const handleAssured = (e)=>{
        setAssured(!assured);
    };

    return(
        <div>
            <h3>Car before update</h3>
            {isLoading && <p>Loading...</p>}
            <CarContainer car={car}/>
            <hr/>
            <h3>Input form</h3>
            <form onSubmit={e => {handleSubmit(e)}}>
                <label>
                    Plate:
                    <input type="text" name="plate" placeholder={car.plate} onChange={e => setPlate(e.target.value)}/>
                </label>
                <label>
                    Manufacturer:
                    <input type="text" name="manufacturer" placeholder={car.manufacturer} onChange={e => setManufacturer(e.target.value)}/>
                </label>
                <label>
                    Assured:
                    <input type="checkbox" name="assured" defaultValue="false" onChange={handleAssured}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default UpdateCar;