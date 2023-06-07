import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import fetchCitiesWeather from '@app/api/fetchCitiesWeather';
import cityIdList from '@app/config/cityIdList';
import CityWeather from '@app/components/CityWeather';
import TCityWeather from '@app/types/CityWeather';

import styles from './styles';

const WeatherScreen = () => {
  const {data, isLoading, isError, isRefetching, refetch} = useQuery({
    queryKey: ['weather'],
    queryFn: () => fetchCitiesWeather(cityIdList),
  });

  // TODO: Remove logs
  console.log('isLoading >', isLoading);
  console.log('isRefetching >', isRefetching);
  console.log('isError >', isError);
  console.log('data >', data);

  const keyExtractor = ({city}: TCityWeather) => city;

  const renderItem: ListRenderItem<TCityWeather> = ({item}) => (
    <CityWeather cityWeather={item} />
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data ?? []}
      refreshing={isRefetching}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      onRefresh={refetch}
    />
  );
};

export default WeatherScreen;
