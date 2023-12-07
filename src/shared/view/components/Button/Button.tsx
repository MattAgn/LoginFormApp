import { useTheme } from '@emotion/react';

import { BaseButton } from '#shared/view/components/Button/BaseButton';
import { IconType } from '#shared/view/icons/Icon.types';

export type ButtonProps = {
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
  label: string;
  StartIcon?: IconType;
  EndIcon?: IconType;
  accessibilityLabel?: string;
};

export const Button = {
  Primary: (props: ButtonProps) => {
    const theme = useTheme();
    return <BaseButton style={theme.button.primary} {...props} />;
  },
  Secondary: (props: ButtonProps) => {
    const theme = useTheme();
    return <BaseButton style={theme.button.secondary} {...props} />;
  },
  Tertiary: (props: ButtonProps) => {
    const theme = useTheme();
    return <BaseButton style={theme.button.tertiary} {...props} />;
  },
};
