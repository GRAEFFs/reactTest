/**
 * Created by graeff on 25/08/16.
 */
"use strict";

var React = require('react');

var Home = React.createClass({
   render: function () {
       return (
           <div className="jumbotron">
               <h1>Administração</h1>
               <p>React for web</p>
           </div>
       );
   }
});

module.exports = Home;