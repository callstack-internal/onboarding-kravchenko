import CityWeather from '@app/types/CityWeather';
import WeatherDetails from '@app/types/WeatherDetails';

enum Symbol {
  Temperature = '°C',
  Speed = 'km/h',
  Percentage = '%',
  Distance = 'm',
  Pressure = 'hPa',
}

const buildWeatherDetails = ({
  temperatureFeelsLike,
  windSpeed,
  clouds,
  visibility,
  pressure,
  humidity,
}: CityWeather): WeatherDetails[] => {
  return [
    {
      title: '🌡️ Feels like',
      value: `${temperatureFeelsLike} ${Symbol.Temperature}`,
      description:
        'Basically, the feels-like temperature is how hot or how cold the air feels to the human body when factoring in variables such as relative humidity, wind speeds and even the amount of sunshine.',
    },
    {
      title: '💨 Wind speed',
      value: `${windSpeed} ${Symbol.Speed}`,
      description:
        'Wind speed, or wind flow speed, is a fundamental atmospheric quantity caused by air moving from high to low pressure, usually due to changes in temperature. Wind speed is now commonly measured with an anemometer.',
    },
    {
      title: '☁️ Clouds',
      value: `${clouds} ${Symbol.Percentage}`,
      description:
        'A cloud is a mass of water drops or ice crystals suspended in the atmosphere. Clouds form when water condenses in the sky. The condensation lets us see the water vapor. There are many different types of clouds.',
    },
    {
      title: '👓 Visibility',
      value: `${visibility} ${Symbol.Distance}`,
      description:
        'Visibility is a measure of the horizontal opacity of the atmosphere at the point of observation and is expressed in terms of the horizontal distance at which a person should be able to see and identify: in the daytime, a prominent dark object against the sky at the horizon.',
    },
    {
      title: '🗜️ Pressure',
      value: `${pressure} ${Symbol.Pressure}`,
      description:
        'The air around you has weight, and it presses against everything it touches. That pressure is called atmospheric pressure, or air pressure. It is the force exerted on a surface by the air above it as gravity pulls it to Earth.',
    },
    {
      title: '💧 Humidity',
      value: `${humidity} ${Symbol.Percentage}`,
      description:
        "Absolute humidity (expressed as grams of water vapor per cubic meter volume of air) is a measure of the actual amount of water vapor (moisture) in the air, regardless of the air's temperature.",
    },
  ];
};

export default buildWeatherDetails;
