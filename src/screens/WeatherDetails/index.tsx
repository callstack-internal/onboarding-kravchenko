import React, {useEffect} from 'react';
import {View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {RootStackParamList, RootStackScreen} from '@app/types/navigation';
import CityWeather from '@app/components/CityWeather';
import DetailsSquare from '@app/components/DetailsSquare';
import buildWeatherDetails from '@app/config/weatherDetails';
import {sizes} from '@app/theme/index';

import styles from './styles';

const WeatherDetailsScreen = () => {
  const {params: cityWeather} =
    useRoute<RouteProp<RootStackParamList, RootStackScreen.WeatherDetails>>();

  const offset = useSharedValue(sizes.screenHeight / 2);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offset.value}],
    };
  });

  const weatherDetails = buildWeatherDetails(cityWeather);

  useEffect(() => {
    offset.value = withSpring(0, {
      damping: 12.5,
      stiffness: 75,
    });
  }, [offset]);

  return (
    <View style={styles.container}>
      <CityWeather
        style={styles.cityWeatherContainer}
        pressable={false}
        cityWeather={cityWeather}
      />

      <Animated.ScrollView
        style={[styles.detailsContainer, animatedStyles]}
        contentContainerStyle={styles.detailsContentContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {weatherDetails.map((weatherDetail, index) => (
          <DetailsSquare key={index} {...weatherDetail} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default WeatherDetailsScreen;
