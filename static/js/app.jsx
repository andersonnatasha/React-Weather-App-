"use strict";

function App () {

    const [zipCode, setZipCode] = React.useState(" ")
    console.log(zipCode)

    function handleZipCodeSubmission (evt) {
        evt.preventDefault();

    }

    return(
        <React.Fragment>
            <Heading message="React Weather App"/>
            <ZipCode onChange={(value) => setZipCode(value)} onClick={(evt) => handleZipCodeSubmission(evt)} />
            <WeatherDetails zipCode={zipCode}/>
        </React.Fragment>
    )
}


ReactDOM.render(<App />, document.querySelector('#app'));



