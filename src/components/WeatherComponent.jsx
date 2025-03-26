import useQueryWeather from "./useQueryWeather.js";
import WeatherCard from "./WeatherCard.jsx";

function WeatherComponent(date){
    const day = date.date;
    const { data: weather, isLoading, error } = useQueryWeather(day);

    if (error) {
        return <div> Erreur lors du chargement, réessayez plus tard ! </div>;
    }

    if (isLoading) {
    return <div>Loading...</div>;
    }
    
    const weathersHourly = []
    
    for (let index = 0; index < 24; index++) {

        let getTime = (s, n) => s.substr(-n);

        weathersHourly.push({
            "id":index,
            "temperature":weather.hourly.temperature_2m[index],
            "time":getTime(weather.hourly.time[index], 5),
            "weather":weather.hourly.weather_code[index],
            "sunrise":getTime(weather.daily.sunrise[0], 5), 
            "sunset":getTime(weather.daily.sunset[0], 5)
        }) ;   
    }

    const weathercards = weathersHourly.map(weatherhour =>
        <WeatherCard key={weatherhour.id} temperature={weatherhour.temperature} time={weatherhour.time} 
        weather={weatherhour.weather} sunrise={weatherhour.sunrise} sunset={weatherhour.sunset}/>
    )

    return(<div className="hourlyHours">
        {weathercards}
        </div>
    );

}

export default WeatherComponent;