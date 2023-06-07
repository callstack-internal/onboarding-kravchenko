import {API_KEY, API_URL} from 'react-native-dotenv';

import SimpleObject from '@app/types/SimpleObject';
import CityWeather from '@app/types/CityWeather';

const fetchCitiesWeather = async (
  cityIds: number[],
): Promise<CityWeather[]> => {
  try {
    const ids = cityIds.join(',');
    const url =
      API_URL + `data/2.5/group?id=${ids}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url, {
      method: 'GET',
    });

    const data: {
      list: SimpleObject[];
    } = await response.json();

    if (data?.list?.length < 1) {
      throw new Error('Weather has not been fetched');
    }

    const result = data.list.map<CityWeather>(item => ({
      city: item?.name ?? '',
      status: item?.weather[0]?.main ?? '',
      iconCode: item?.weather[0]?.icon ?? '',
      visibility: item?.visibility ?? 0,
      temperature: item?.main?.temp ?? 0,
      temperatureFeelsLike: item?.main?.feels_like ?? 0,
      pressure: item?.main?.pressure ?? 0,
      humidity: item?.main?.humidity ?? 0,
      windSpeed: item?.wind?.speed ?? 0,
      clouds: item?.clouds?.all ?? 0,
    }));

    return result;
  } catch (error) {
    // TODO: Add some error tracking service
    console.error('Network error', {
      location: 'fetchCityWeather',
      error: error,
    });

    throw new Error('Something went wrong');
  }
};

export default fetchCitiesWeather;
