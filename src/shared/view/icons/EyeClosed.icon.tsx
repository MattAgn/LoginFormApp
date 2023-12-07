import { useTheme } from '@emotion/react';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';

import { DEFAULT_ICON_SIZE_PX } from '#shared/view/icons/Icon.constants';

import { IconType } from './Icon.types';

const EyeClosedIconSvg: IconType = ({ size = DEFAULT_ICON_SIZE_PX, color }) => {
  const theme = useTheme();
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      testID="eye-closed-icon"
    >
      <Path
        d="M10.94 6.08c.35-.054.705-.08 1.06-.08 3.18 0 6.17 2.29 7.91 6a15.23 15.23 0 0 1-.9 1.64 1 1 0 1 0 1.7 1.05c.466-.732.87-1.501 1.21-2.3a1.001 1.001 0 0 0 0-.79C19.9 6.91 16.1 4 12 4a7.77 7.77 0 0 0-1.4.12 1.015 1.015 0 0 0 .34 2v-.04ZM3.71 2.29a1.004 1.004 0 1 0-1.42 1.42l3.1 3.09a14.62 14.62 0 0 0-3.31 4.8 1 1 0 0 0 0 .8C4.1 17.09 7.9 20 12 20a9.26 9.26 0 0 0 5.05-1.54l3.24 3.25a1 1 0 0 0 1.42 0 1.002 1.002 0 0 0 0-1.42l-18-18Zm6.36 9.19 2.45 2.45a2 2 0 0 1-2.45-2.45ZM12 18c-3.18 0-6.17-2.29-7.9-6a12.09 12.09 0 0 1 2.7-3.79L8.57 10A4 4 0 0 0 14 15.43L15.59 17A7.24 7.24 0 0 1 12 18Z"
        fill={color || theme.colors.grey50}
      />
    </Svg>
  );
};

export const EyeClosedIcon = memo(EyeClosedIconSvg);
EyeClosedIcon.displayName = 'EyeClosed';
