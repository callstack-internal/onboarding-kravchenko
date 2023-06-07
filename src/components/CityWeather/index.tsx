import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList, RootStackScreen} from '@app/types/navigation';
import {opacity} from '@app/theme/index';

import styles from './styles';

// TODO: Do not expert once API is ready
export type Props = {
  style?: ViewStyle;
  iconCode: string;
  city: string;
  cityId: number;
  status: string;
  temperature: number;
  pressable?: boolean;
};

const CityWeather: FC<Props> = ({
  style,
  iconCode,
  city,
  cityId,
  status,
  temperature,
  pressable = true,
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
