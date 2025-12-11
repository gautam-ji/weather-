import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



export default function SearchBox(){
let [city, setCity] = useState("");

let handleChange = (eve) =>{
    setCity(eve.target.value);

}

let handleSumbit = (eve) =>{
    eve.preventDefault();
    console.log(city);
    setCity("");
}


    return (
        <div>
            <h3>Search for the weather </h3>
            <form onSubmit={handleSumbit}>
                <TextField onChange={handleChange} value={city} id="outlined-basic" label="City Name" variant="outlined" />
            <br/>
                <Button variant="contained" type='sumbit'>Search</Button>
     
            </form>
        </div>
    )
}