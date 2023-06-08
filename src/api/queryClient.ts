import {QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient();

// TODO: Remove eslint disable somehow
if (__DEV__) {
  import('react-query-native-devtools')
    // eslint-disable-next-line promise/always-return, promise/prefer-await-to-then
    .then(({addPlugin}) => {
      addPlugin({queryClient});
    })
    // eslint-disable-next-line promise/prefer-await-to-then
    .catch(error => {
      console.error('react-query-native-devtools has crashed', error);
    });
}

export default queryClient;
