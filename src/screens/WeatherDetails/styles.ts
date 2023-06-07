import {StyleSheet} from 'react-native';

import {colors, sizes} from '@app/theme/index';

export default StyleSheet.create({
  container: {
    paddingHorizontal: sizes.lg,
    paddingVertical: sizes.xl,
    flex: 1,
    backgroundColor: colors.background,
  },
  detailsContainer: {
    flex: 1,
  },
  detailsContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: sizes.sm,
  },
  cityWeatherContainer: {
    marginBottom: sizes.lg,
  },
});
