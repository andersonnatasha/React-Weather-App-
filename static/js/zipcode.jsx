"use strict";

function ZipCode ({onChange, onSubmit}) {


    return(
        <form onSubmit={(evt) => {onSubmit(evt)}}>
            <input type="text" name="zip-code" placeholder="Enter Zip Code" onChange={(evt) => {onChange(evt.target.value)}}/>
            <button type="submit" >Submit</button>
        </form>

    )
}


// onChange={(evt) => {onChange(evt.target.value)}}