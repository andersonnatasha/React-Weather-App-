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
    const [weather, getWeather] = React.useState(null)


    function handleZipCodeSubmission (zipcode){

        console.log(zipcode)
        let data = {'zipcode':zipcode}
        console.log('data', data)
        fetch('/get-weather-details',{method: "POST",  body: JSON.stringify(data),  headers: {
            'Content-Type': 'application/json'}} )
            .then((res) => res.json())
            .then((data) => console.log('data from get-weather-details',data)
    )}


     return (
        <div>
            <h1>React Weather App</h1>
             <img id="homepage-img" src="/static/img/sun_and_clouds.png"/>
            <form onSubmit={handleZipCodeSubmission(zipcode)}>
               <input type="text" name="zip-code" value={zipcode} placeholder="Search a Zip Code" onChange={e => updateZip(e.target.value)}/>
                <button type="submit" value="Submit">SUBMIT</button>
            </form>
            <p> Your zip is {zipcode} </p>
            {/* {<WeatherDetails
                cityName = {props.temp_max}
            > } */}
         </div>
              )
 }



// function Heading(){
//     return(
//         <h1>React Weather App &#176;</h1>
//     );
// }

// function HomepageImg(){
//     return (
//         <img id="homepage-img" src="/static/img/sun_and_clouds.png"/>
//     );
// }

// function ZipCode(){
//     return (
//     <form>
//         <input type="text" name="zip-code" placeholder="Search a Zip Code" />
//     </form>
//     );
// }

// function WeatherDetailsContainer(){

//     const [details, getWeatherDetails] = React.useState(" ")

//     const weatherDetails = [];

//     React.useEffect(() => {
//         fetch('/get-weather-details')
//         .then((response) => response.json())
//         .then((data) => getWeatherDetails(data))
//       }, [])



      // helper function of get weather then uin useEffect call get weather
    //   for (const detail of )

//     return (
//         <div>{{weatherDetails}}</div>
//     )

// }

// ReactDOM.render(<Heading />, document.querySelector('#heading'));
// ReactDOM.render(<HomepageImg />, document.querySelector('#sun-image'));
// ReactDOM.render(<ZipCode />, document.querySelector('#zip-code'));
// ReactDOM.render(<WeatherDetailsContainer />, document.querySelector('#weather-details'));

ReactDOM.render(< WeatherApp />, document.querySelector('#heading'));



// server is going to output to front end. Then the


// each component is a page so here maybe only need one component



