export enum RootStackScreen {
  Weather = 'Weather',
  WeatherDetails = 'WeatherDetails',
}

export type RootStackParamList = {
  [RootStackScreen.Weather]: undefined;
  [RootStackScreen.WeatherDetails]: {
    cityId: number;
  };
};
