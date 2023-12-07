import { ViewStyle } from 'react-native';

import { PressableWithFeedbackState } from '#shared/view/components/PressableWithFeedback/PressableWithFeedback';

type pressableWithFeedbackStylesType = Record<
  PressableWithFeedbackState,
  (pressed: boolean) => ViewStyle
>;

export const pressableWithFeedback: pressableWithFeedbackStylesType = {
  default: (pressed: boolean) => ({ opacity: pressed ? 0.5 : 1 }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  disabled: (_: boolean) => ({ opacity: 1 }),
};
