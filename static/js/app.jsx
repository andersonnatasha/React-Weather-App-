"use strict";

function App () {

    const [zipCode, setZipCode] = React.useState(" ")
    console.log(zipCode)

    function handleZipCodeSubmission (evt) {
        evt.preventDefault();
        console.log(evt.target)

    }

    return(
        <React.Fragment>
            <Heading message="React Weather App"/>
            <ZipCode onChange={(value) => value.length === 5 && setZipCode(value)} onSubmit={(evt) => handleZipCodeSubmission(evt)} />
            <WeatherDetails zipCode={zipCode}/>
        </React.Fragment>
    )
}




ReactDOM.render(<App />, document.querySelector('#app'));



