import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

interface Props {
  city: string;
  status: string;
  iconCode: string;
  temperature: number;
}

const CityWeather: FC<Props> = ({iconCode, city, status, temperature}) => {
  const iconUri = `https://openweathermap.org/img/wn/${iconCode}.png`;

  return (
    <View style={styles.container}>
      <Image
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

      <Text style={styles.temperatureBadge} numberOfLines={1}>
        {temperature}
      </Text>
    </View>
  );
};

export default CityWeather;
