import City from './City';

interface CityWeather extends City {
  status: string;
  iconCode: string;
  visibility: number;
  temperature: number;
  temperatureFeelsLike: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  clouds: number;
}

export default CityWeather;
