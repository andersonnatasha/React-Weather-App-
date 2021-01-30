

"use strict";

function WeatherDetails ({zipCode, apiKey}) {
    const [weatherTemperature, setWeatherTemperature] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [description, setDescription] = React.useState('')



    React.useEffect(() => {
        axios.get("http://api.openweathermap.org/data/2.5/weather",{
            params: {
                APPID: apiKey,
                zip: zipCode,
                units: 'imperial'
            }
        }).then(res => {
            setLocation(res.data.name)
             // get the description as lower case letters, turn to list, map over, capitalize first letter concat with rest of word, remove comma, turn to string
            setDescription((res.data.weather[0].description.split(" ").map(word => word[0].toUpperCase() + word.slice(1).concat(" ")).join("").toString()))
            setWeatherTemperature(res.data.main)

        })
    }, [zipCode])


    return(
        <React.Fragment>
            <div id="location">
                {location}
            </div>
            <div id="description">
                {description}
            </div>
            <div id="details">

                <div id="temp">
                    {weatherTemperature.temp} &#176;
                </div>

                <div id="feels-like">
                    {weatherTemperature.feels_like} &#176;
                </div>
            </div>
        </React.Fragment>

    )
}

