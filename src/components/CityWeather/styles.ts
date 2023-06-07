import {StyleSheet} from 'react-native';

import {borderRadius, colors, fonts, sizes} from '@app/theme/index';

export default StyleSheet.create({
  container: {
    padding: sizes.sm,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: borderRadius.sm,
    backgroundColor: colors.secondaryBackground,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: sizes.sm,
  },
  icon: {
    width: sizes.icon,
    height: sizes.icon,
  },
  cityTitle: {
    ...fonts.subheading,
    marginBottom: sizes.xs,
  },
  statusTitle: {
    ...fonts.caption,
    color: colors.secondaryForeground,
  },
  temperatureContainer: {
    maxWidth: sizes['1/4'],
    padding: sizes.sm,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.background,
  },
  temperatureTitle: {
    ...fonts.caption,
    color: colors.secondaryForeground,
  },
});
