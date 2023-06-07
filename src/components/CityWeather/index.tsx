import React from 'react';
import {Image, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList, RootStackScreen} from '@app/types/navigation';
import TCityWeather from '@app/types/CityWeather';
import {opacity} from '@app/theme/index';

import styles from './styles';

type Props = {
  style?: ViewStyle;
  pressable?: boolean;
  cityWeather: TCityWeather;
};

const CityWeather = ({style, pressable = true, cityWeather}: Props) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {iconCode, temperature, city, status} = cityWeather;
  const iconUri = `https://openweathermap.org/img/wn/${iconCode}.png`;
  const temperatureText = `${temperature} °C`;

  const onPress = () => {
    navigate(RootStackScreen.WeatherDetails, cityWeather);
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={opacity.active}
      accessibilityRole="button"
      disabled={!pressable}
      onPress={onPress}>
      <Image
        style={styles.icon}
        source={{uri: iconUri, cache: 'force-cache'}}
        accessibilityIgnoresInvertColors
      />

      <View style={styles.contentContainer}>
        <Text style={styles.cityTitle} numberOfLines={1}>
          {city}
        </Text>

        <Text style={styles.statusTitle} numberOfLines={1}>
          {status}
        </Text>
      </View>

      <View style={styles.temperatureContainer}>
        <Text style={styles.temperatureTitle} numberOfLines={1}>
          {temperatureText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CityWeather;
