import {StyleSheet} from 'react-native';

import {colors, sizes} from '@app/theme/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    paddingHorizontal: sizes.lg,
    paddingVertical: sizes.xl,
  },
  separator: {
    height: sizes.sm,
  },
});
