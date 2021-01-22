"use strict";

function Heading(){
    return(
        <ul>
            <h1>React Weather App</h1>
        </ul>
    );
}

ReactDOM.render(<Heading />, document.querySelector('#app'));

