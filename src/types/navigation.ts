import CityWeather from './CityWeather';
import WeatherDetails from './WeatherDetails';

export enum RootStackScreen {
  Weather = 'Weather',
  WeatherDetails = 'WeatherDetails',
  PropertyDetails = 'PropertyDetails',
}

export type RootStackParamList = {
  [RootStackScreen.Weather]: undefined;
  [RootStackScreen.WeatherDetails]: CityWeather;
  [RootStackScreen.PropertyDetails]: WeatherDetails;
};
