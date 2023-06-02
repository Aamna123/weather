import React, { useState } from "react";
import "./leftDiv.css";
import { MdOutlineFmdGood } from "react-icons/md";
import { handleWeatherCode } from "./utils.js";
function LeftDiv(props) {
  const [value, setValue] = useState("");

  return (
    <div className="leftOuterDiv">
      <div className="location_search_div">
        <input
          className="inputDiv"
          placeholder={"Enter Location"}
          onChange={(event) => setValue(event.target.value)}
        />

        <MdOutlineFmdGood
          className="location_icon"
          onClick={() => {
            props.onValueChange(value);
          }}
        />
      </div>
      <div className="windSpeedDiv">
        <span className="windSpeed">Wind Speed: WSW {props.windspeed}mph</span>
      </div>
      <div className="detsDiv">
        {props.dailyDetails.map((item) => (
          <div className="detsHeadings">
            <div className="dets-title">
              <span>{item.title} </span>
            </div>
            <div className="dets-details">
              <span>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="weather">
        <div className="weatherIcon">
          {handleWeatherCode(props.currentWeathercode, props.isDay).weatherIcon}
        </div>
        <div className="weatherDescription">
          {handleWeatherCode(props.currentWeathercode, props.isDay).description}
        </div>
      </div>
    </div>
  );
}
export default LeftDiv;
