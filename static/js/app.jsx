"use strict";

function App () {

    return(
        <React.Fragment>
            <Heading message="React Weather App" />
            <ZipCode />
            <WeatherDetails />
        </React.Fragment>
    )
}


ReactDOM.render(<App />, document.querySelector('#app'));



