/**
 * Created by graeff on 26/08/16.
 */
"use strict";

var React = require('react');
 var Header = React.createClass({
     render: function () {
         return (
             <nav className="navbar navbar-defautl">
                 <div className="container-fluid">
                     <a href="/" className="navbar-brand">
                         <img src="images/intensivecognitio-small.png" width="55px" alt=""/>
                     </a>
                     <ul className="nav navbar-nav">
                         <li><a href="/">Home</a></li>
                         <li><a href="/#authors">Authors</a></li>
                         <li><a href="/#about">About</a></li>
                     </ul>
                 </div>
             </nav>
         );
     }
 });

module.exports = Header;