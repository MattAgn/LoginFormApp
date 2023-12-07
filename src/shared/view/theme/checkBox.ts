import {
  CheckBoxAvailability,
  CheckBoxState,
} from '#shared/view/components/CheckBox/CheckBox';
import { colors } from '#shared/view/theme/colors';
import { ThemeColor } from '#shared/view/theme/colors.types';

type CheckBoxStyle = Record<
  CheckBoxState,
  Record<
    CheckBoxAvailability,
    { checkBoxColor: ThemeColor; labelColor: ThemeColor }
  >
>;

export const checkBox: CheckBoxStyle = {
  checked: {
    enabled: {
      checkBoxColor: colors.black,
      labelColor: colors.black,
    },
    disabled: {
      checkBoxColor: colors.grey200,
      labelColor: colors.grey300,
    },
  },
  unchecked: {
    enabled: {
      checkBoxColor: colors.grey200,
      labelColor: colors.black,
    },
    disabled: {
      checkBoxColor: colors.grey200,
      labelColor: colors.grey300,
    },
  },
};
