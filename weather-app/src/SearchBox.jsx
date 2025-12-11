import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



export default function SearchBox(){
 let [city, setCity] = useState("");
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY  = "bf01b2a6390978e9418d1e0d5d7afa9b";

let getWeatherInfo = async () =>{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_Like,
        weather: jsonResponse.weather[0].description ,
    }
    console.log(result);
}


let handleChange = (eve) =>{
    setCity(eve.target.value);

}

let handleSumbit = (eve) =>{
    eve.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
}


    return (
        <div>
            <h3>Search for the weather </h3>
            <form onSubmit={handleSumbit}>
                <TextField onChange={handleChange} value={city} id="outlined-basic" label="City Name" variant="outlined" />
            <br/>
            <br/>
                <Button variant="contained" type='sumbit'>Search</Button>
     
            </form>
        </div>
    )
}