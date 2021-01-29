"use strict";

function Heading ({message}) {
    return (
        <React.Fragment>
            <img id="homepage-img" src="/static/img/sun_and_clouds.png"/>
            <h1>{message}</h1>
        </React.Fragment>

    )
}