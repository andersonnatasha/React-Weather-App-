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
            <div id="zip-code-form" >
            <ZipCode onChange={(value) => value.length === 5 && setZipCode(value)} onSubmit={(evt) => handleZipCodeSubmission(evt)} />
            {zipCode.length === 5 &&  <WeatherDetails zipCode={zipCode}/>}
            </div>
        </React.Fragment>
    )
}




ReactDOM.render(<App />, document.querySelector('#app'));



