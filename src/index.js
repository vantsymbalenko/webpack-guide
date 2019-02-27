import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("root"));

if(module.hot){
    module.hot.accept('./App.js', () => {
        const NextApp = require("./App.js").default
        ReactDOM.render(<NextApp/>, document.getElementById("root"))
    })
}