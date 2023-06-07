import {API_URL} from 'react-native-dotenv';

import SimpleObject from '@app/types/SimpleObject';

const buildUrl = (
  endpoint: string,
  query: SimpleObject | null = null,
): string => {
  const url = new URL(endpoint, API_URL);

  if (query !== null) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  return url.href;
};

export default buildUrl;
