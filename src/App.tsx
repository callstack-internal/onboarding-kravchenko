// TODO: Figure out a solution
/* eslint-disable import/no-extraneous-dependencies */
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList, RootStackScreen} from './navigation';
import WeatherScreen from './screens/Weather';
import WeatherDetailsScreen from './screens/WeatherDetails';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={RootStackScreen.Weather}
          component={WeatherScreen}
        />

        <RootStack.Screen
          name={RootStackScreen.WeatherDetails}
          component={WeatherDetailsScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
