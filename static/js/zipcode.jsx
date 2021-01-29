"use strict";

function ZipCode () {

    const [zipCode, setZipCode] = React.useState(" ")

    return(
        <React.Fragment>
        <form>
            <input type="text" onChange={e => setZipCode(e.target.value)} value={zipCode} name="zip-code" placeholder="Enter Zip Code" />
            <button onClick={handleZipCodeSubmission} value="Submit">Submit</button>
        </form>
        <div>
            your zip code is {zipCode}
        </div>
        </ React.Fragment>
    )
}