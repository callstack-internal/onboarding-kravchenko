import React, {useEffect} from 'react';
import {Alert, FlatList, ListRenderItem, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import fetchCitiesWeather from '@app/api/fetchCitiesWeather';
import cityIdList from '@app/config/cityIdList';
import CityWeather from '@app/components/CityWeather';
import Loader from '@app/components/Loader';
import ICityWeather from '@app/types/CityWeather';

import styles from './styles';

const WeatherScreen = () => {
  const {data, isError, isRefetching, refetch} = useQuery({
    queryKey: ['weather'],
    queryFn: () => fetchCitiesWeather(cityIdList),
  });

  const keyExtractor = ({city}: ICityWeather) => city;

  const renderItem: ListRenderItem<ICityWeather> = ({item}) => (
    <CityWeather cityWeather={item} />
  );

  const renderSeparator = () => <View style={styles.separator} />;

  const renderListEmpty = () => <Loader />;

  useEffect(() => {
    if (isError) {
      Alert.alert('Error', 'Something went wrong');
    }
  }, [isError]);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data ?? []}
      refreshing={isRefetching}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderListEmpty}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      onRefresh={refetch}
    />
  );
};

export default WeatherScreen;
