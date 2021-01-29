"use strict";

function App () {
    const [zipCode, setZipCode] = React.useState(" ");
    return(
        <ZipCode />
    )
}


ReactDOM.render(<App />, document.querySelector('#app'));



