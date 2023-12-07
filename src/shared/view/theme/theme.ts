import { button } from './button';
import { checkBox } from './checkBox';
import { colors } from './colors';
import { fonts } from './fonts';
import { iconButton } from './iconButton';
import { pressableWithFeedback } from './pressableWithFeedback';
import { radioButton } from './radioButton';
import { switchStyle } from './switch';
import { tag } from './tag';
import { textInput } from './textInput';
import { tooltip } from './tooltip';

export const theme = {
  colors,
  fonts,
  button,
  radioButton,
  switch: switchStyle,
  textInput,
  tag,
  tooltip,
  checkBox,
  iconButton,
  pressableWithFeedback,
} as const;
