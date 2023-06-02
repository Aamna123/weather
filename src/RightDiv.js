import React, { useEffect, useState } from "react";
import { handleWeatherCode } from "./utils.js";
import { WiCelsius } from "react-icons/wi";
import "./RightDiv.css";
const RightDiv = (props) => {
  const { currentTemperature = 0, currentTime = "", cityName="" } = props;
  const { currentWeathercode = 0, weathercodes = [], isDay = 0 } = props;
  const { maxTempArray = [], minTempArray = [] } = props;
  const [weekdays, setWeekdays] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();

  function sortArr() {
    const beforeSelected = weekdays.slice(0, currentDayIndex - 1);
    const afterSelected = weekdays.slice(currentDayIndex - 1);
    const shiftedArray = afterSelected.concat(beforeSelected);
    setWeekdays(shiftedArray);
  }
  useEffect(() => {
    sortArr();
  }, []);

  return (
    <div className="rightDiv">
      <div className="upperDiv">
        <div className="topHeading">
          <div>
            <span>Weather</span>
          </div>
          <div>
            <span>Channel</span>
          </div>
        </div>
        <div className="city-name">
          <span>{cityName}</span>
        </div>
        <div className="city-name-time">
          <span>{currentTime}</span>
        </div>
        <div>
          <div className="current-weather-icon">
            {handleWeatherCode(currentWeathercode, isDay).icon}
          </div>
        </div>
        <div className="temperature">
          <div className="current-temperature">
            <div>{currentTemperature}</div>
            <div className="celsius">
              <WiCelsius />
            </div>
          </div>
          <div className="weather-detail">
            <span>
              {handleWeatherCode(currentWeathercode, 1).weatherStatus}
            </span>
          </div>
        </div>
      </div>
      <div className="lower-outter-div">
        <div className="lower-div">
          {weekdays.map((weekday, index) => (
            <div>
              <div className="city-temp">
                {handleWeatherCode(weathercodes[index], 1).icon}
              </div>
              <div className="weekday-name">
                <span>{weekday}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="high-low-temp">
          {maxTempArray.map((maxTemp,index)=>(
          <div>
            <div >
              <span ><div className="high-temp">High</div> <div className="inner-temp">{maxTemp}< WiCelsius className="inner-celsius"/></div> </span>
            </div>
            <div>
              <span><div className="low-temp">Low</div> <div className="inner-temp">{minTempArray[index]}< WiCelsius className="inner-celsius"/></div> </span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RightDiv;
