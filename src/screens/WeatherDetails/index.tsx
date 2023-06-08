import React from 'react';
import {ScrollView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {RootStackParamList, RootStackScreen} from '@app/types/navigation';
import CityWeather from '@app/components/CityWeather';
import DetailsSquare from '@app/components/DetailsSquare';
import buildWeatherDetails from '@app/config/weatherDetails';

import styles from './styles';

const WeatherDetailsScreen = () => {
  const {params: cityWeather} =
    useRoute<RouteProp<RootStackParamList, RootStackScreen.WeatherDetails>>();

  const weatherDetails = buildWeatherDetails(cityWeather);

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
        {weatherDetails.map((weatherDetail, index) => (
          <DetailsSquare key={index} {...weatherDetail} />
        ))}
      </ScrollView>
    </View>
  );
};

export default WeatherDetailsScreen;
