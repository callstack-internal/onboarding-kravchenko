import React from 'react';
import {ScrollView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {RootStackParamList, RootStackScreen} from '@app/types/navigation';
import CityWeather from '@app/components/CityWeather';
import DetailsSquare from '@app/components/DetailsSquare';

import styles from './styles';

const WeatherDetailsScreen = () => {
  const {params: cityWeather} =
    useRoute<RouteProp<RootStackParamList, RootStackScreen.WeatherDetails>>();

  const {
    temperatureFeelsLike,
    windSpeed,
    clouds,
    visibility,
    pressure,
    humidity,
  } = cityWeather;

  return (
    <View style={styles.container}>
      <CityWeather
        style={styles.cityWeatherContainer}
        pressable={false}
        cityWeather={cityWeather}
      />

      <ScrollView
        style={styles.detailsContainer}
        contentContainerStyle={styles.detailsContentContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <DetailsSquare
          title="🌡️ Feels like"
          value={`${temperatureFeelsLike} °C`}
        />

        <DetailsSquare title="💨 Wind speed" value={`${windSpeed} km/h`} />

        <DetailsSquare title="☁️ Clouds" value={`${clouds} %`} />

        <DetailsSquare title="👓 Visibility" value={`${visibility} m`} />

        <DetailsSquare title="🗜️ Pressure" value={`${pressure} hPa`} />

        <DetailsSquare title="💧 Humidity" value={`${humidity} %`} />
      </ScrollView>
    </View>
  );
};

export default WeatherDetailsScreen;
