import "./App.css";
import { useState, useEffect } from "react";
import background from "./images/Background.jpg";
import LeftDiv from "./leftDiv.js";
import RightDiv from "./RightDiv.js";
function App() {
  const [dataVar, setDataVar] = useState("");
  const [currentTemperature, setCurrentTemperature] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [weather, setWeather] = useState(0);
  const [maxTemp, setMaxTemp] = useState([]);
  const [minTemp, setMinTemp] = useState([]);
  const [day, setDay] = useState(false);
  const [windspeed, setWindspeed] = useState(0);
  const [dailyWeatherCode, setDailyWeatherCode] = useState([]);
  const [dailyDets, setDailyDets] = useState([]);
  const [cityName, setCityName] = useState("");

  const handleValueChange = async (value = "Islamabad") => {
    try {
      const locationApi = await fetch(
        "https://api.positionstack.com/v1/forward?access_key=06eb24f072b3fe087c2e15278e90cb81&query=1600%20" +
          value
      );
      setCityName(value);
      locationApi.json().then(async (res) => {
        const data = res.data;
        console.log(data);

        try {
          const date = new Date().toISOString().split("T");
          const current = new Date();
          current.setDate(current.getDate() + 6);
          const endDate = current.toISOString().split("T");
          console.log(date[0]);

          const r = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=" +
              data[0].latitude +
              "&longitude=" +
              data[0].longitude +
              "&daily=temperature_2m_max,temperature_2m_min,precipitation_hours,winddirection_10m_dominant,apparent_temperature_max,apparent_temperature_min,weathercode&timezone=GMT&current_weather=true&weathercode&start_date=" +
              date[0] +
              "&end_date=" +
              endDate[0]
          );
          console.log("1234");
          setDataVar(await r.json());
        } catch (err) {
          console.log(err);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleValueChange();
  }, []);

  useEffect(() => {
    console.log(dataVar);
    setCurrentTemperature(dataVar?.current_weather?.temperature);
    setMaxTemp(dataVar?.daily?.temperature_2m_max);
    setMinTemp(dataVar?.daily?.temperature_2m_min);
    setCurrentTime(new Date(dataVar?.current_weather?.time).toDateString());
    setWindspeed(dataVar?.current_weather?.windspeed);
    setDay(dataVar?.current_weather?.is_day);
    setDailyWeatherCode(dataVar?.daily?.weathercode);
    setWeather(dataVar?.current_weather?.weathercode);
    setDailyDets([
      {
        title: "Apparent Temperature Max",
        value: dataVar?.daily?.apparent_temperature_max[0],
      },
      {
        title: "Apparent Temperature Min",
        value: dataVar?.daily?.apparent_temperature_min[0],
      },
      {
        title: "Dominant Wind Direction",
        value: dataVar?.daily?.winddirection_10m_dominant[0] + "°",
      },
      {
        title: "Number of hours with rain",
        value: dataVar?.daily?.precipitation_hours[0],
      },
    ]);
  }, [dataVar]);
  return (
    <div
      className="app "
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="innerDiv">
          <LeftDiv
            onValueChange={handleValueChange}
            windspeed={windspeed}
            dailyDetails={dailyDets}
            currentWeathercode={weather}
            isDay={day}
          />
          <RightDiv
            currentTemperature={currentTemperature}
            currentWeathercode={weather}
            currentTime={currentTime}
            maxTempArray={maxTemp}
            minTempArray={minTemp}
            weathercodes={dailyWeatherCode}
            isDay={day}
            cityName={cityName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
