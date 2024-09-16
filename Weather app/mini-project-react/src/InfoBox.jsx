import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1703018894827-96c5e0049541?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://media.istockphoto.com/id/540761642/photo/thermometer-sun-40-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=0pB1ieAfgBekJEaZAt5mBYio-BC5TGiSza0-6XOcVqc=";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1671658221576-8d9a4b04bd8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const RAINY_URL="https://media.istockphoto.com/id/1223163413/photo/rainy-day-in-istanbul-turkey.webp?a=1&b=1&s=612x612&w=0&k=20&c=RgUw3fG0F6bAVU3sf6F7r64kJR4c7IJaf4wu7AHlwSk=";

    
    return(
       <div className="InfoBox">
      
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAINY_URL : (info.temp>15) ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color= "text.secondary"  component={"span"}>
        <p>Temperature={info.temp}&deg;C</p>
        <p>Humidity={info.humidity}</p>
        <p>Min temp={info.tempMin}</p>
        <p>Max Temp={info.tempMax}</p>
        <p>The weather can be described as {info.weather} and feels like={info.feelslike}&deg;C</p>

        </Typography>
      </CardContent>
      
    </Card>
       </div>
    )
}

export default InfoBox;