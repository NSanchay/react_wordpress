import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss'
import App from './App';
import 'bootstrap';

// var App = function(){

//     return 'hello';
// };


document.addEventListener( 'DOMContentLoaded', function(){
    let elements = document.getElementById( 'react_call' );
    if( typeof elements !== 'undefined' && elements !== null){
        ReactDOM.render( <App />, document.getElementById( 'react_call' ) );
    }
    else{
        console.log("undefiine ns");
    }
});
