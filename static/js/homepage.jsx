"use strict";

// function WeatherDetails(prop) {
//     return (
//         <div className="weather">
//             <p> {prop.city_name} </p>
//             <p> {prop.weather_description} </p>
//             <p> Temperature: {prop.temp}&#176; </p>
//             <p> Feels Like: {prop.feels_like}&#176; </p>
//             <p> Min: {prop.temp_min}&#176; </p>
//             <p> Max:{prop.temp_max}&#176; </p>
//             <p> Humidity: {prop.humidity}% </p>
//             <p> Wind: {prop.wind_speed} mph </p>
//         </div>
//     );
// };



const WeatherApp = (props) => {
    const [zipcode, updateZip] = React.useState("")
    const [weather, getWeather] = React.useState([])


    const handleZipCodeSubmission = (evt) => {
        evt.preventDefault();
        let data = {zipcode}
        fetch('/get-weather-details',{method: "POST",  body: JSON.stringify(data),  headers: {
            'Content-Type': 'application/json'}} )
            .then((res) => res.json())
            .then((data) => weather.push(data));
        console.log(weather)}


     return (
        <div>
            <h1>React Weather App</h1>
             <img id="homepage-img" src="/static/img/sun_and_clouds.png"/>
            <form>
               <input type="text" name="zip-code" value={zipcode} placeholder="Search a Zip Code" onChange={e => updateZip(e.target.value)}/>
                <button onClick={handleZipCodeSubmission} value="Submit">SUBMIT</button>
            </form>
            <p> Your zip is {zipcode} </p>
            <p>{weather}</p>
         </div>
              )
 }



ReactDOM.render(< WeatherApp />, document.querySelector('#app'));



