"use strict";

function Heading(){
    return(
        <ul>
            <h1>Weather Checker</h1>
        </ul>
    );
}

ReactDOM.render(<Heading />, document.querySelector('#app'));
