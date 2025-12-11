import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


export default function InfoBox() {
const INIT_URL = 
"https://images.unsplash.com/photo-1743614491407-c0af2955dcf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3VkcyUyMHRlbXB8ZW58MHx8MHx8fDA%3D"

let info = {
    city: "Delhi",
    feelslike: 24.85,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 22,
    humidity: 444,
    weather: "haze"
}

    return(
        <>
        <div className="infoBox">
            <h1>WeatherInfo -{info.weather}</h1>

         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>tempMin = {info.tempMin}</p>
          <p>maxTemp = {info.tempMax}</p>
           <p>the weather can be describe as <i>{info.weather } </i> and feels like {info.feelslike}</p>
          
        </Typography>
      </CardContent>
     
    </Card>

        </div>
        </>
    )
}