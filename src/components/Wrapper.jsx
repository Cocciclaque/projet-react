import { useState } from "react";
import Weather from "./Weather.jsx";
function Wrapper(){
    
    var displayDate;
    
    let newDate = new Date()
    let theDay = newDate.getDate();
    let theMonth = newDate.getMonth();
    let theYear = newDate.getFullYear();
    
    const [day, setDay] = useState(theDay);


    let builtDate = `${theYear}-${theMonth}-${theDay}`;

    updateDayDisplay();
    

    function previous(){
        setDay(day - 1);
        updateDayDisplay();
    }

    function next(){
        setDay(day + 1);
        updateDayDisplay();
    }

    function updateDayDisplay(){

        theDay = day;

        const event = new Date(Date.UTC(theYear, theMonth, theDay, 0, 0, 0));
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
        var date = event.toLocaleDateString(undefined, options)
    
        displayDate =  date.split(',')[0]

        builtDate = `${theYear}-${theMonth}-${theDay}`;
    }

    return(
        <div className="wrapper">
            <div>
                <button onClick={previous}>Previous Day</button>
                <button onClick={next}>Next Day</button>
            </div>
            
            <Weather display={displayDate} dataDate={builtDate}/>
            

        </div>
    );
}





export default Wrapper;