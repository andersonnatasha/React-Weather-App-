"use strict";

function App () {

    const [zipCode, setZipCode] = React.useState(" ")
    const [apiKey, setApiKey] = React.useState(" ")


    React.useEffect(() => {
        fetch('/api/apikey')
        .then(res => res)
        .then(res => res.json())
        .then(data => setApiKey(data))
    },[])

    function handleZipCodeSubmission (evt) {
        evt.preventDefault();
        console.log(evt.target)

    }

    return(
        <div id="app">
            <Heading message="React Weather App"/>
            <div id="zip-code-form" >
                <ZipCode onChange={(value) => value.length === 5 && setZipCode(value)} onSubmit={(evt) => handleZipCodeSubmission(evt)} />
                {zipCode.length === 5 &&  <WeatherDetails zipCode={zipCode} apiKey={apiKey}/>}
            </div>
            <div id="heading-details">
                <div className="specific-heading">
                <Section title="Temperature" />
                </div>
            <div className="specific-heading">
                <Section title="Feels Like" />
            </div>
            </div>
        </div>
    )
}




ReactDOM.render(<App />, document.querySelector('#app'));



