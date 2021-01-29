"use strict";

function Heading ({message}) {
    return (
        <React.Fragment>
            <h1 class="heading">{message}</h1>
            <img id="homepage-img" src="/static/img/sun_and_clouds.png"/>
        </React.Fragment>

    )
}