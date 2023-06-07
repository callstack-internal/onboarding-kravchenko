import React from 'react';
import {ScrollView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {RootStackParamList, RootStackScreen} from '@app/types/navigation';
import CityWeather from '@app/components/CityWeather';
import DetailsRow from '@app/components/DetailsRow';

import styles from './styles';

// TODO: Use real data once API is ready
const WeatherDetailsScreen = () => {
  const {
    params: {cityId},
  } = useRoute<RouteProp<RootStackParamList, RootStackScreen.WeatherDetails>>();

  return (
    <View style={styles.container}>
      <CityWeather
        style={styles.cityWeatherContainer}
        cityId={cityId}
        city="Sumy"
        status="Clear"
        iconCode="01d"
        temperature={22.5}
        pressable={false}
      />

      <ScrollView
        style={styles.detailsContainer}
        contentContainerStyle={styles.detailsContentContainer}
        bounces={false}>
        <DetailsRow title="🌡️ Feels like" value="21 °C" />

        <DetailsRow title="💨 Wind speed" value="5 km/h" />

        <DetailsRow title="☁️ Clouds" value="30 %" />

        <DetailsRow title="👓 Visibility" value="1000 m" />

        <DetailsRow title="🗜️ Pressure" value="1001 hPa" />

        <DetailsRow title="💧 Humidity" value="40 %" />
      </ScrollView>
    </View>
  );
};

export default WeatherDetailsScreen;
