import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {opacity} from '@app/theme/index';

// TODO: Add path
import {RootStackParamList, RootStackScreen} from '../../navigation';
import styles from './styles';

// TODO: Do not expert once API is ready
export interface Props {
  iconCode: string;
  city: string;
  cityId: number;
  status: string;
  temperature: number;
}

const CityWeather: FC<Props> = ({
  iconCode,
  city,
  cityId,
  status,
  temperature,
}) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const iconUri = `https://openweathermap.org/img/wn/${iconCode}.png`;
  const temperatureText = `${temperature} °C`;

  const onPress = () => {
    navigate(RootStackScreen.WeatherDetails, {
      cityId,
    });
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
