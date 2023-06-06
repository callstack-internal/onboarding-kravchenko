import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {opacity} from '@app/theme/index';

import styles from './styles';

// TODO: Do not expert once API is ready
export interface Props {
  city: string;
  status: string;
  iconCode: string;
  temperature: number;
}

const CityWeather: FC<Props> = ({iconCode, city, status, temperature}) => {
  const iconUri = `https://openweathermap.org/img/wn/${iconCode}.png`;
  const temperatureText = `${temperature} °C`;

  const onPress = () => {
    // TODO: Add handler
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={opacity.active}
      accessibilityRole="button"
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
