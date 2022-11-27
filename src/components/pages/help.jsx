import React from "react";
import Topnav from "./partials/topnav";
import helpgame from "../../helpgame.svg";
import helpaccount from "../../helpaccount.svg";







const Help = () => (

<div>



<div className="fancy-bac-2">

<Topnav/>


<div className="container">


<div className="row">


<div className="col-sm-12">


<h3 className=" mrg-top-help">Get help.</h3>

<p className="help-intro">From the street to real gaming, <br/>break new grounds with CUEBALL.</p>



</div>



</div>




</div>


<div className="container">

<div className="row">

<div className="mrg-icon">
<div className="col ">

<a href="gamehelp.html" title="Help with a game">
 <img alt="" src={helpgame} className="img-fluid help-icon zoom"/>
</a>

<a href="accounts.html" title="Help My account">
<img alt="" src={helpaccount} className="img-fluid help-icon  zoom"/>
</a>

</div>

</div>



</div>
</div>



</div>


</div>

);


export default Help;