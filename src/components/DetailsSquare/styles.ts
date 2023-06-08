import {borderRadius, colors, fonts, sizes} from '@app/theme/index';
import {StyleSheet} from 'react-native';

const SQUARE = (sizes.screenWidth - sizes.lg * 2) / 2 - sizes.sm;

export default StyleSheet.create({
  container: {
    width: SQUARE,
    height: SQUARE,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.secondaryBackground,
  },
  touchableContainer: {
    flex: 1,
    padding: sizes.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...fonts.caption,
    marginBottom: sizes.sm,
  },
  value: {
    ...fonts.subheading,
  },
});
