import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList, RootStackScreen} from './navigation';

import WeatherScreen from '@app/screens/Weather';
import WeatherDetailsScreen from '@app/screens/WeatherDetails';

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
