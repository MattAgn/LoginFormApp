import { TextStyle } from 'react-native';

import { RadioButtonState } from '#shared/view/components/RadioButton/RadioButton';
import { ThemeColor } from '#shared/view/theme/colors.types';
import { colors } from '#shared/view/theme/colors';

type RadioButtonStyle = Record<RadioButtonState, TextStyle> & {
  checkedIconColor: ThemeColor;
};

export const radioButton: RadioButtonStyle = {
  enabled: {
    color: colors.textNormal,
  },
  disabled: {
    color: colors.grey300,
  },
  checkedIconColor: colors.textNormal,
};
