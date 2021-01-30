"use strict";

function ZipCode ({onChange, onSubmit}) {


    return(
        <form id="zip-input" onSubmit={(evt) => {onSubmit(evt)}}>
            <input type="text" name="zip-code" placeholder="Enter A Zip Code" onChange={(evt) => {onChange(evt.target.value)}}/>
        </form>

    )
}