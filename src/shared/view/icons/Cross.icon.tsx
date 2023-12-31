import { useTheme } from '@emotion/react';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';

import { DEFAULT_ICON_SIZE_PX } from '#shared/view/icons/Icon.constants';

import { IconType } from './Icon.types';

const CrossIconSvg: IconType = ({ size = DEFAULT_ICON_SIZE_PX, color }) => {
  const theme = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" testID="cross-icon">
      <Path
        fill={color || theme.colors.grey50}
        fillRule="evenodd"
        d="M12,10.9395 L18.2196699,4.71966991 C18.5125631,4.4267767 18.9874369,4.4267767 19.2803301,4.71966991 C19.5406796,4.98001944 19.5696073,5.38415604 19.3671133,5.67645825 L19.2803301,5.78033009 L13.0605,12 L19.2803301,18.2196699 C19.5732233,18.5125631 19.5732233,18.9874369 19.2803301,19.2803301 C19.0199806,19.5406796 18.615844,19.5696073 18.3235417,19.3671133 L18.2196699,19.2803301 L12,13.0605 L5.78033009,19.2803301 C5.48743687,19.5732233 5.01256313,19.5732233 4.71966991,19.2803301 C4.45932039,19.0199806 4.43039266,18.615844 4.63288674,18.3235417 L4.71966991,18.2196699 L10.9395,12 L4.71966991,5.78033009 C4.4267767,5.48743687 4.4267767,5.01256313 4.71966991,4.71966991 C4.98001944,4.45932039 5.38415604,4.43039266 5.67645825,4.63288674 L5.78033009,4.71966991 L12,10.9395 Z"
      />
    </Svg>
  );
};

export const CrossIcon = memo(CrossIconSvg);

CrossIcon.displayName = 'Cross';
