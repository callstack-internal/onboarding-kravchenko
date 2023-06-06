import {borderRadius, colors, fonts, sizes} from '@app/theme/index';
import {StyleSheet} from 'react-native';

const SQUARE = (sizes.screenWidth - sizes.lg * 2) / 2 - sizes.sm;

export default StyleSheet.create({
  container: {
    width: SQUARE,
    height: SQUARE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.sm,
    backgroundColor: colors.secondaryBackground,
  },
  title: {
    ...fonts.caption,
    marginBottom: sizes.sm,
  },
  value: {
    ...fonts.subheading,
  },
});
