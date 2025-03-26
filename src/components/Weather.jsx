import DateDisplay from "./dateDisplay.jsx";
import WeatherComponent from "./WeatherComponent.jsx";

function Weather(props){

    return(
        <div className="hourly">
            <DateDisplay display={props.display} />
            <WeatherComponent date={props.dataDate} />
        </div>
    );
}

export default Weather;