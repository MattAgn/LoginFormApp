import { colors } from '#shared/view/theme/colors';
import { Flatten } from '#shared/view/theme/utils';

type Colors = typeof colors;

export type ThemeColor = Flatten<Colors>;
