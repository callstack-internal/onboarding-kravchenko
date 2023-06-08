import React from 'react';
import {Button, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClientProvider} from '@tanstack/react-query';

import queryClient from '@app/api/queryClient';
import {RootStackParamList, RootStackScreen} from '@app/types/navigation';
import WeatherScreen from '@app/screens/Weather';
import WeatherDetailsScreen from '@app/screens/WeatherDetails';
import PropertyDetailsScreen from '@app/screens/PropertyDetails';
import {colors, fonts} from '@app/theme/index';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const defaultScreenOptions = {
  headerTitleStyle: {
    ...fonts.heading,
  },
  headerStyle: {
    backgroundColor: colors.secondaryBackground,
  },
  headerTintColor: colors.foreground,
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
} as const;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={defaultScreenOptions}>
          <RootStack.Screen
            name={RootStackScreen.Weather}
            component={WeatherScreen}
            options={{
              headerTitle: 'Weather',
            }}
          />

          <RootStack.Screen
            name={RootStackScreen.WeatherDetails}
            component={WeatherDetailsScreen}
            options={{
              headerTitle: '',
            }}
          />

          <RootStack.Screen
            name={RootStackScreen.PropertyDetails}
            component={PropertyDetailsScreen}
            options={({navigation}) => ({
              headerTitle: '',
              headerShown: true,
              presentation: 'transparentModal',
              headerRight:
                Platform.OS === 'ios'
                  ? () => (
                      <Button
                        title="Done"
                        color={colors.foreground}
                        onPress={navigation.goBack}
                      />
                    )
                  : undefined,
            })}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
