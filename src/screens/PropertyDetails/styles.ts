import {StyleSheet} from 'react-native';

import {colors, sizes, fonts} from '@app/theme/index';

export default StyleSheet.create({
  container: {
    paddingHorizontal: sizes.lg,
    paddingVertical: sizes.xl,
    flex: 1,
    backgroundColor: colors.background,
  },
  detailsContainer: {
    width: sizes.full,
  },
  title: {
    ...fonts.subheading,
    textAlign: 'center',
    marginTop: sizes.lg,
    marginBottom: sizes.md,
  },
  description: {
    ...fonts.caption,
  },
});
