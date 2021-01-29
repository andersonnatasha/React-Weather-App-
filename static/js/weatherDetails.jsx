"use strict";

function WeatherDetails ({zipCode}) {
    const [weatherDetails, setWeatherDetails] = React.useState("");

    React.useEffect(() => {
        axios.get("http://api.openweathermap.org/data/2.5/weather",{
            params: {
                APPID:'d1120f81edc8e436db7e6a562f101e99',
                zip: zipCode,
                units: 'imperial'
            }
        }).then(res => {
            setWeatherDetails(res.data.main)
        })
    }, [zipCode])


    return(
        <React.Fragment>
            <div id="details">
                <div id="temp">
                    <Section title="Temperature" />
                    {weatherDetails.temp}
                </div>

                <div id="feels-like">
                    <Section title="Feels Like" />
                    {weatherDetails.feels_like}
                </div>
            </div>
        </React.Fragment>

    )
}

