import { ViewStyle } from 'react-native';

import { TooltipProps } from '#shared/view/components/Tooltip/Tooltip';
import { ThemeColor } from '#shared/view/theme/colors.types';
import { colors } from '#shared/view/theme/colors';

type TooltipStyle = Record<
  TooltipProps['type'],
  {
    container: ViewStyle;
    icon: { color: ThemeColor };
  }
>;

const baseContainerStyle: ViewStyle = {
  flex: 1,
  padding: 16,
  flexDirection: 'row',
  alignItems: 'center',
};

export const tooltip: TooltipStyle = {
  info: {
    container: {
      ...baseContainerStyle,
      backgroundColor: colors.grey50,
    },
    icon: {
      color: colors.black,
    },
  },
  success: {
    container: {
      ...baseContainerStyle,
      backgroundColor: colors.statusSuccessLight,
    },
    icon: {
      color: colors.black,
    },
  },
  warning: {
    container: {
      ...baseContainerStyle,
      backgroundColor: colors.statusWarningLight,
    },
    icon: {
      color: colors.black,
    },
  },
  error: {
    container: {
      ...baseContainerStyle,
      backgroundColor: colors.statusErrorLight,
    },
    icon: {
      color: colors.black,
    },
  },
};
