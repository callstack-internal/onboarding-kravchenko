import React from 'react';
import {ScrollView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {RootStackParamList, RootStackScreen} from '@app/types/navigation';
import CityWeather from '@app/components/CityWeather';
import DetailsRow from '@app/components/DetailsRow';

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
        <DetailsRow
          title="🌡️ Feels like"
          value={`${temperatureFeelsLike} °C`}
        />

        <DetailsRow title="💨 Wind speed" value={`${windSpeed} km/h`} />

        <DetailsRow title="☁️ Clouds" value={`${clouds} %`} />

        <DetailsRow title="👓 Visibility" value={`${visibility} m`} />

        <DetailsRow title="🗜️ Pressure" value={`${pressure} hPa`} />

        <DetailsRow title="💧 Humidity" value={`${humidity} %`} />
      </ScrollView>
    </View>
  );
};

export default WeatherDetailsScreen;
