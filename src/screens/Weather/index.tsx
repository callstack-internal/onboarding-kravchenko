import React, {FC} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

import CityWeather, {
  Props as CityWeatherProps,
} from '@app/components/CityWeather';

import styles from './styles';

// TODO: Remove once API is ready
const CITIES: CityWeatherProps[] = [
  {
    cityId: 43423,
    city: 'Sumy',
    status: 'Clear',
    iconCode: '01d',
    temperature: 22.5,
  },
  {
    cityId: 53423,
    city: 'Kyiv',
    status: 'Few clouds',
    iconCode: '02d',
    temperature: 20.3,
  },
  {
    cityId: 43453,
    city: 'Warsaw',
    status: 'Scattered clouds',
    iconCode: '03d',
    temperature: 17.3,
  },
  {
    cityId: 43423,
    city: 'Sumy',
    status: 'Clear',
    iconCode: '01d',
    temperature: 22.5,
  },
  {
    cityId: 53423,
    city: 'Kyiv',
    status: 'Few clouds',
    iconCode: '02d',
    temperature: 20.3,
  },
  {
    cityId: 43453,
    city: 'Warsaw',
    status: 'Scattered clouds',
    iconCode: '03d',
    temperature: 17.3,
  },
];

const WeatherScreen: FC = () => {
  const keyExtractor = (_: CityWeatherProps, index: number) => index.toString();

  const renderItem: ListRenderItem<CityWeatherProps> = ({item}) => (
    <CityWeather {...item} />
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={CITIES}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default WeatherScreen;
