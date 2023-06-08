import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList, RootStackScreen} from '@app/types/navigation';
import {opacity} from '@app/theme/index';

import styles from './styles';

type Props = {
  style?: ViewStyle;
  pressable?: boolean;
  title: string;
  value: string;
  description: string;
};

const DetailsSquare = ({
  style,
  pressable = true,
  title,
  value,
  description,
}: Props) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    navigate(RootStackScreen.PropertyDetails, {
      title,
      value,
      description,
    });
  };

  return (
    <Animated.View
      style={[styles.container, style]}
      sharedTransitionTag={`DetailsSquare-${title}`}>
      <TouchableOpacity
        style={styles.touchableContainer}
        activeOpacity={opacity.active}
        disabled={!pressable}
        accessibilityRole="button"
        onPress={onPress}>
        <Animated.Text
          style={styles.title}
          numberOfLines={2}
          sharedTransitionTag={`DetailsSquare-title-${title}`}>
          {title}
        </Animated.Text>

        <Animated.Text
          style={styles.value}
          numberOfLines={1}
          sharedTransitionTag={`DetailsSquare-value-${title}`}>
          {value}
        </Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default DetailsSquare;
