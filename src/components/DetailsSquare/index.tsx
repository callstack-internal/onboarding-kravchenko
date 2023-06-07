import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

type Props = {
  title: string;
  value: string;
};

const DetailsSquare = ({title, value}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>

      <Text style={styles.value} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
};

export default DetailsSquare;
