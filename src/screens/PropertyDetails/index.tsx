import React from 'react';
import {Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {RootStackParamList, RootStackScreen} from '@app/types/navigation';
import DetailsSquare from '@app/components/DetailsSquare';

import styles from './styles';

const PropertyDetailsScreen = () => {
  const {
    params: {title, value, description},
  } =
    useRoute<RouteProp<RootStackParamList, RootStackScreen.PropertyDetails>>();

  return (
    <View style={styles.container}>
      <DetailsSquare
        style={styles.detailsContainer}
        pressable={false}
        title={title}
        value={value}
        description={description}
      />

      <Text style={styles.title}>About</Text>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default PropertyDetailsScreen;
