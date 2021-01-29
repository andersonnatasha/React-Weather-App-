"use strict";

function ZipCode ({onChange, onClick}) {


    return(
        <React.Fragment>
        <form>
            <input type="text" name="zip-code" placeholder="Enter Zip Code" onChange={(evt) => {onChange(evt.target.value)}}/>
            <button onClick={(evt) => {onClick(evt)}} value="Submit">Submit</button>
        </form>
        <div>
            {/* your zip code is {zipCode} */}
        </div>
        </ React.Fragment>
    )
}
// onChange={e => setZipCode(e.target.value)} value={zipCode}