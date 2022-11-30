import React from "react";
import "./style.css";
const Temp = () => {
  return (  
  <>
  <div className="wrap">
    <div className="search">
    <input 
    type="search"
      placeholder="search...."
      autofocus
      id="search"
      className="searchTerm"
      />
      <button className="searchButton" type="button"></button>
      Search
  </div>
  </div>


  {}
  <article className="widget">
  <div className="weatherIcon">
    <i className={"wi wi-day-sunny"}></i>
  </div>

  <div className="weatherInfo">
    <div className="temperature">
        </div>
        </div> 
  </article>
</>
  );
  };

export default Temp;