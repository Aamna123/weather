import {
  WiDaySunnyOvercast,
  WiDayFog,
  WiRain,
  WiHail,
  WiNightSnowThunderstorm,
  WiStormShowers,
  WiDaySunny,
  WiNightClear,
  WiRaindrops,
  WiDaySnowThunderstorm,
  WiNightAltPartlyCloudy,
  WiCloudy,
  WiUmbrella,
  WiNightFog,
} from "react-icons/wi";
import { CiCloudDrizzle } from "react-icons/ci";
import { IoThunderstormOutline } from "react-icons/io5";
import {
  BsCloudDrizzle,
  BsCloudSnow,
  BsSunglasses,
  BsMoonStars,
  BsSnow,
  BsThermometerSnow,
} from "react-icons/bs";
import { RiTempColdLine } from "react-icons/ri";
import { GiFogLight, GiHeavyRain, GiLightningStorm } from "react-icons/gi";
export function handleWeatherCode(weathercode, isDay) {
  switch (weathercode) {
    case 0:
      if (isDay === 1)
        return {
          icon: <WiDaySunny />,
          weatherStatus: "Clear Sky, Mostly Sunny",
          description:
            "Its a clear sunny day, the sky is vibrant and blue. A gentle breeze carries a cool, refreshing air. It's a perfect day to go outside, bask in the sunshine, and enjoy the beauty of nature.",
          weatherIcon: <BsSunglasses />,
        };
      else
        return {
          icon: <WiNightClear />,
          weatherStatus: "Clear Sky with Shinning Moon",
          description:
            "Its a clear sky, the weather is calm and tranquil. A gentle breeze carries a cool, refreshing air. It's a perfect night to stargaze, enjoy the peaceful atmosphere, and embrace the beauty of the night sky.",
          weatherIcon: <BsMoonStars />,
        };
    case 1:
    case 2:
    case 3:
      if (isDay === 1)
        return {
          icon: <WiDaySunnyOvercast />,
          weatherStatus: "Mainly Clear, Partly Cloudy",
          description:
            "The sky is partly cloudy. The sun intermittently peeks through the scattered clouds, casting alternating rays of warmth and shade. It's a great day to appreciate the play of light and shadow while enjoying the pleasant outdoor conditions.",
          weatherIcon: <WiCloudy />,
        };
      else
        return {
          icon: <WiNightAltPartlyCloudy />,
          weatherStatus: "Mainly Clear, Partly Cloudy",
          description:
            "The sky is partly cloudy. The moon occasionally emerges from behind passing clouds, casting an ethereal glow over the landscape. It's an enchanting night to witness the ever-changing dance between moonlight and fleeting cloud cover.",
          weatherIcon: <WiCloudy />,
        };
    case 45:
    case 48:
      if (isDay === 1)
        return {
          icon: <WiDayFog />,
          weatherStatus: "Depositing Rime Fog",
          description:
            "Today is a foggy day, visibility is significantly reduced, creating potentially hazardous conditions. It is important to exercise caution and take extra care while driving or navigating through the fog.",
          weatherIcon: <GiFogLight />,
        };
      else
        return {
          icon: <WiNightFog />,
          weatherStatus: "Depositing Rime Fog",
          description:
            "Today is a foggy day, visibility is significantly reduced, creating potentially hazardous conditions. It is important to exercise caution and take extra care while driving or navigating through the fog.",
          weatherIcon: <GiFogLight />,
        };
    case 51:
      if (isDay == 1)
        return {
          icon: <CiCloudDrizzle />,
          weatherStatus: " Light Drizzle",
          description:
            "Its lightly drizzling outside. The air carries a sense of freshness, and the soft patter of rain creates a serene backdrop. It's a perfect time to enjoy a cup of tea, take a leisurely walk, or simply embrace the tranquil beauty of the light drizzle.",
          weatherIcon: <WiRaindrops />,
        };
      else
        return {
          icon: <CiCloudDrizzle />,
          weatherStatus: " Light Drizzle",
          description:
            "Its lightly drizzling outside. The air carries a sense of freshness, and the soft patter of rain creates a serene backdrop. It's a perfect time to enjoy a cup of tea, take a leisurely walk, or simply embrace the tranquil beauty of the light drizzle.",
          weatherIcon: <WiRaindrops />,
        };

    case 53:
      return {
        icon: <CiCloudDrizzle />,
        weatherStatus: "Moderate Drizzle",
        description:
          "Its drizzling outside. The air carries a sense of freshness, and the soft patter of rain creates a serene backdrop. It's a time to find comfort indoors or don a light raincoat and embrace the gentle embrace of the moderate drizzle.",
        weatherIcon: <WiRaindrops />,
      };
    case 55:
      return {
        icon: <CiCloudDrizzle />,
        weatherStatus: "Intense Drizzle",
        description:
          "Its heavily drizzling outside. The air carries a sense of freshness, and the soft patter of rain creates a serene backdrop. It's advisable to seek shelter or use appropriate rain gear as the intensity of the drizzle may lead to significant wetness and reduced visibility.",
        weatherIcon: <WiRaindrops />,
      };
    case 56:
      return {
        icon: <BsCloudDrizzle />,
        weatherStatus: "Freezing Light Drizzle",
        description:
          "Its lightly drizzling and freezing outside. The air feels chilly, and the icy precipitation adds an extra level of caution to outdoor activities. It's important to be mindful of slippery conditions and take necessary precautions to stay safe in the freezing light drizzle.",
        weatherIcon: <WiRaindrops />,
      };
    case 57:
      return {
        icon: <BsCloudDrizzle />,
        weatherStatus: "Freezing Dense Intensity Drizzle",
        description:
          "Its freezing dense intensity drizzle outside. The air feels chilly, It is advisable to slow down, maintain a safe distance from other vehicles, and use extra caution while walking to prevent any injuries.",
        weatherIcon: <WiRaindrops />,
      };
    case 61:
      return {
        icon: <WiRain />,
        weatherStatus: "Slight Rain",
        description:
          "It is slightly raining outside. It is advisable to carry an umbrella or wear appropriate rain gear to stay dry. Slight rain is generally manageable and often provides a pleasant atmosphere.",
        weatherIcon: <GiHeavyRain />,
      };
    case 63:
      return {
        icon: <WiRain />,
        weatherStatus: "Moderate Rain",
        description:
          "It is raining outside. It is advisable to carry an umbrella or wear appropriate rain gear to stay dry. It is advisable to reduce driving speed and maintain a safe distance from other vehicles as roads can be slippery.",
        weatherIcon: <GiHeavyRain />,
      };
    case 65:
      return {
        icon: <WiRain />,
        weatherStatus: "Heavy Rain",
        description:
          "It is heavily raining outside. It is advisable to carry an umbrella or wear appropriate rain gear to stay dry. It is advisable to drive at slower speeds, maintain a safe distance from other vehicles, and be prepared to pull over if necessary.",
        weatherIcon: <GiHeavyRain />,
      };
    case 66:
      return {
        icon: <WiHail />,
        weatherStatus: "Light Rain , Freezing Cold",
        description:
          "It is lightly raining and freezing cold outside. It is advisable to carry an umbrella or wear appropriate rain gear to stay dry. Light rain is generally manageable and often provides a pleasant atmosphere.",
        weatherIcon: <RiTempColdLine />,
      };
    case 67:
      return {
        icon: <WiHail />,
        weatherStatus: "Heavy Rain , Freezing Cold",
        description:
          "It is heavily raining and freezing cold outside. It is advisable to carry an umbrella or wear appropriate rain gear to stay dry. It is advisable to drive at slower speeds, maintain a safe distance from other vehicles, and be prepared to pull over if necessary.",
        weatherIcon: <RiTempColdLine />,
      };
    case 71:
      return {
        icon: <BsCloudSnow />,
        weatherStatus: "Slight Snowfall",
        description:
          "It is slight snowfall outside. It is important to take precautions such as dressing warmly, using appropriate footwear, and taking care on slippery surfaces.",
        weatherIcon: <BsSnow />,
      };
    case 73:
      return {
        icon: <BsCloudSnow />,
        weatherStatus: "Moderate Snowfall",
        description:
          "It is snowing outside, perfect weather to make a snowman. It is important to take precautions such as dressing warmly, using appropriate footwear, and taking care on slippery surfaces.",
        weatherIcon: <BsSnow />,
      };
    case 75:
      return {
        icon: <BsCloudSnow />,
        weatherStatus: "Heavy Snowfall",
        description:
          "It is heavy snowfall outside, perfect weather to make a snowman. It is important to take precautions such as dressing warmly, using appropriate footwear, and taking care on slippery surfaces.",
        weatherIcon: <BsSnow />,
      };
    case 77:
      return {
        icon: <BsCloudSnow />,
        weatherStatus: "Snow Grains",
        description:
          "It is slight snowfall outside. It is important to take precautions such as dressing warmly, using appropriate footwear, and taking care on slippery surfaces.",
        weatherIcon: <BsSnow />,
      };
    case 80:
      return {
        icon: <WiStormShowers />,
        weatherStatus: "Slight Rain Showers",
        description:
          "It is slightly raining outside. It is advisable to carry an umbrella or wear appropriate rain gear to stay dry. Slight rain is generally manageable and often provides a pleasant atmosphere.",
        weatherIcon: <GiHeavyRain />,
      };
    case 81:
      return {
        icon: <WiStormShowers />,
        weatherStatus: "Moderate Rain Showers",
        description:
          "It is raining outside. It is advisable to carry an umbrella or wear appropriate rain gear to stay dry. It is advisable to reduce driving speed and maintain a safe distance from other vehicles as roads can be slippery.",
        weatherIcon: <GiHeavyRain />,
      };
    case 82:
      return {
        icon: <WiStormShowers />,
        weatherStatus: "Violent Rain Showers",
        description:
          "It is heavily raining outside. It is advisable to carry an umbrella or wear appropriate rain gear to stay dry. It is advisable to drive at slower speeds, maintain a safe distance from other vehicles, and be prepared to pull over if necessary.",
        weatherIcon: <GiHeavyRain />,
      };
    case 85:
      if (isDay == 1)
        return {
          icon: <WiDaySnowThunderstorm />,
          weatherStatus: "Slight Snow Showers",
          description:
            "Slight snow showers outside, It is important to be prepared for changing weather conditions, exercise caution while driving due to reduced visibility and potentially slippery roads, and dress warmly to stay comfortable in the cold temperatures.",
          weatherIcon: <BsThermometerSnow />,
        };
      else
        return {
          icon: <WiNightSnowThunderstorm />,
          weatherStatus: "Slight Snow Showers",
          description:
            "Slight snow showers outside, It is important to be prepared for changing weather conditions, exercise caution while driving due to reduced visibility and potentially slippery roads, and dress warmly to stay comfortable in the cold temperatures.",
          weatherIcon: <BsThermometerSnow />,
        };
    case 86:
      if (isDay == 1)
        return {
          icon: <WiDaySnowThunderstorm />,
          weatherStatus: "Heavy Snow Showers",
          description:
            "Heavy snow showers outside, It is important to be prepared for changing weather conditions, exercise caution while driving due to reduced visibility and potentially slippery roads, and dress warmly to stay comfortable in the cold temperatures.",
          weatherIcon: <BsThermometerSnow />,
        };
      else
        return {
          icon: <WiNightSnowThunderstorm />,
          weatherStatus: "Heavy Snow Showers",
          description:
            "Heavy snow showers outside, It is important to be prepared for changing weather conditions, exercise caution while driving due to reduced visibility and potentially slippery roads, and dress warmly to stay comfortable in the cold temperatures.",
          weatherIcon: <BsThermometerSnow />,
        };
    case 95:
      return {
        icon: <IoThunderstormOutline />,
        weatherStatus: "Thunderstorm",
        description:
          "Its a thunderstorm outside. Seek indoor shelter to stay safe from lightning and be aware of potential hazards like heavy rain, strong winds, and flash floods. It is advisable to stay away from open areas, tall objects, and bodies of water until the thunderstorm has passed.",
        weatherIcon: <GiLightningStorm />,
      };
    case 96:
      return {
        icon: <WiHail />,
        weatherStatus: "Slightly Hailing",
        description:
          "It is slightly hailing outside. During hailstorms, it is important to seek shelter indoors to avoid being struck by falling hailstones, which can cause injury or damage to property.",
        weatherIcon: <WiUmbrella />,
      };
    case 99:
      return {
        icon: <WiHail />,
        weatherStatus: "Heavy Hailing",
        description:
          "It is heavily hailing outside. During hailstorms, it is important to seek shelter indoors to avoid being struck by falling hailstones, which can cause injury or damage to property.",
        weatherIcon: <WiUmbrella />,
      };
    default:
      return { icon: <IoThunderstormOutline /> };
  }
}
