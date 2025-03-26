import weathers from "./weatherDescriptions.json";

function WeatherCard(weatherhour){
    let altText;
    let imgSrc; 

    if(weatherhour.time <= weatherhour.sunrise || weatherhour.time >= weatherhour.sunset){
        altText = weathers[weatherhour.weather].night.description;
        imgSrc = weathers[weatherhour.weather].night.image;
    }else{
        altText = weathers[weatherhour.weather].day.description;
        imgSrc = weathers[weatherhour.weather].day.image;
    }
    return(
        <div className="weatherCard">
            <h3>{weatherhour.time}</h3>
            <div>{weatherhour.temperature}°C</div>
            <img src={imgSrc} alt={altText} />
        </div>
    )
}

export default WeatherCard;