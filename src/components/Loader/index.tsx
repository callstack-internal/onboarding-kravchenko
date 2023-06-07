import React from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';

import {colors, sizes} from '@app/theme/index';

import styles from './styles';

type Props = {
  style?: ViewStyle;
};

const Loader = ({style}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={sizes.lg} color={colors.foreground} />
    </View>
  );
};

export default Loader;
