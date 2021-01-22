"use strict";

function Heading(){
    return(
        <h1>React Weather App</h1>
    );
}

function HomepageImg(){
    return (
        <img id="homepage-img" src="/static/img/sun_and_clouds.png"/>
    );
}

function ZipCode(){
    return (
    <form>
        <input type="text" name="zip-code" placeholder="Search a Zip Code" />
    </form>
    );
}

ReactDOM.render(<Heading />, document.querySelector('#heading'));
ReactDOM.render(<HomepageImg />, document.querySelector('#sun-image'));
ReactDOM.render(<ZipCode />, document.querySelector('#zip-code'));


