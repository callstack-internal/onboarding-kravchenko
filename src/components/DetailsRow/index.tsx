import React, {FC} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  value: string;
}

const DetailsRow: FC<Props> = ({title, value}) => {
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

export default DetailsRow;
