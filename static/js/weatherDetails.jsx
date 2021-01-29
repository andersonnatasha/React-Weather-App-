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




    console.log(weatherDetails)


    return(
        <React.Fragment>
            <Section title="Temperature" />
            <div> {weatherDetails.temp} </div>
            <Section title="Feels Like" />
            <div> {weatherDetails.feels_like} </div>
        </React.Fragment>

    )
}

